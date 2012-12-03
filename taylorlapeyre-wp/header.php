<!DOCTYPE html>

<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->

<head>
  <meta charset="utf-8" />

  <!-- Set the viewport width to device width for mobile -->
  <meta name="viewport" content="width=device-width" />

  <title>
  <?php
  	/*
  	 * Print the <title> tag based on what is being viewed.
  	 */
  	global $page, $paged;
  
  	wp_title( '|', true, 'right' );
  
  	// Add the blog name.
  	bloginfo( 'name' );
  
  	// Add the blog description for the home/front page.
  	$site_description = get_bloginfo( 'description', 'display' );
  	if ( $site_description && ( is_home() || is_front_page() ) )
  		echo " | $site_description";
  
  	// Add a page number if necessary:
  	if ( $paged >= 2 || $page >= 2 )
  		echo ' | ' . sprintf( __( 'Page %s', 'sundance' ), max( $paged, $page ) );
  
  	?>
  </title>
  
  <!-- CSS -->
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/foundation.min.css">
  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">

  <script src="<?php echo get_template_directory_uri(); ?>/assets/js/modernizr.foundation.js"></script>

  <!-- IE Fix for HTML5 Tags -->
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>
<body>

	<header class="row">
		<div class="four columns centered" id="top">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/logo.png" height="100px" width="100px" /></a>
			<h4><?php bloginfo( 'name' ); ?></h4>
			<p>
				​<?php bloginfo( 'description' ); ?>
			</p>
		</div>
	</header>
