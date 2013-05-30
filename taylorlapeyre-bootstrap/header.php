<!DOCTYPE html>

<html <?php language_attributes(); ?>>
<head>
  <!-- basic page needs -->
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
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- css -->
  <link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url'); ?>">
</head>
<body class="container">
  <header class="page-header">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php header_image(); ?>" width="<?php echo get_custom_header()->width; ?>" height="<?php echo get_custom_header()->height; ?>"></a>
    <h1><?php bloginfo( 'name' ); ?></h1>
    <p class="muted"><?php bloginfo( 'description' ); ?></p>
  </header>

  <nav>
    <ul class="nav nav-pills">
      <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Blog</a></li>
      <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>/?page_id=22">About Me</a></li>
    </ul>
  </nav>