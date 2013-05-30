<?php

$args = array(
	'width'         => 100,
	'height'        => 100,
	'default-image' => get_template_directory_uri() . '/img/logo.png',
);
add_theme_support( 'custom-header', $args );

/** template-tags.php
 * 
 * Implementation of the Custom Header feature
 * http://codex.wordpress.org/Custom_Headers
 * 
 * @author    Konstantin Obenland
 * @package   The Bootstrap
 * @since   1.2.4 - 07.04.2012
 */


if ( ! function_exists( 'the_bootstrap_content_nav' ) ) :
/**
 * Display navigation to next/previous pages when applicable
 *
 * To be honest - I'm pretty proud of this function. Through a lot of trial and
 * error, I was able to user a core WordPress function (paginate_links()) and
 * adjust it in a way, that the end result is a legitimate pagination.
 * A pagination many developers buy (code) expensively with Plugins like
 * WP Pagenavi. No need! WordPress has it all!
 *
 * @author  Konstantin Obenland
 * @since 1.0.0 - 05.02.2012
 *
 * @return  void
 */
function the_bootstrap_content_nav() {
  global $wp_query, $wp_rewrite;

  $paged      = ( get_query_var( 'paged' ) ) ? intval( get_query_var( 'paged' ) ) : 1;

  $pagenum_link = html_entity_decode( get_pagenum_link() );
  $query_args   = array();
  $url_parts    = explode( '?', $pagenum_link );
  
  if ( isset( $url_parts[1] ) ) {
    wp_parse_str( $url_parts[1], $query_args );
  }
  $pagenum_link = remove_query_arg( array_keys( $query_args ), $pagenum_link );
  $pagenum_link = trailingslashit( $pagenum_link ) . '%_%';
  
  $format     = ( $wp_rewrite->using_index_permalinks() AND ! strpos( $pagenum_link, 'index.php' ) ) ? 'index.php/' : '';
  $format     .=  $wp_rewrite->using_permalinks() ? user_trailingslashit( 'page/%#%', 'paged' ) : '?paged=%#%';
  
  $links  = paginate_links( array(
    'base'    =>  $pagenum_link,
    'format'  =>  $format,
    'total'   =>  $wp_query->max_num_pages,
    'current' =>  $paged,
    'mid_size'  =>  3,
    'type'    =>  'list',
    'add_args'  =>  array_map( 'urlencode', $query_args )
  ) );

  if ( $links ) {
    echo "<nav class=\"pagination pagination-centered clearfix\">{$links}</nav>";
  }
}
endif;
?>