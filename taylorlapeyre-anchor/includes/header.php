<!doctype html>
<html lang="en">
	<head>
		<!-- basic page needs -->
		<meta charset="utf-8">
		<title><?php echo page_title('Page can’t be found'); ?> - <?php echo site_name(); ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php echo site_description(); ?>">

		<!-- css -->
		<link rel="stylesheet" href="<?php echo theme_url('/css/bootstrap.min.css'); ?>">
		<link rel="stylesheet" href="<?php echo theme_url('/css/bootstrap-responsive.min.css'); ?>">
		<link rel="stylesheet" href="<?php echo theme_url('/css/style.css'); ?>">
		
		<!-- rss -->
		<link rel="alternate" type="application/rss+xml" title="RSS" href="<?php echo rss_url(); ?>">
		<link rel="shortcut icon" href="<?php echo theme_url('img/favicon.png'); ?>">

		<!--[if lt IE 9]>
			<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		
		<!-- seo -->
    <meta name="generator" content="Anchor CMS <?php echo ANCHOR_VERSION; ?>">
    <meta property="og:title" content="<?php echo site_name(); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo absolute_url(); ?>">
    <meta property="og:image" content="<?php echo absolute_url(theme_url('img/og_image.gif')); ?>">
    <meta property="og:site_name" content="<?php echo site_name(); ?>">
    <meta property="og:description" content="<?php echo site_description(); ?>">
		
		<?php if(customised()): ?>
		    <!-- custom css -->
    		<style><?php echo article_css(); ?></style>
    		
    		<!--  custom js -->
    		<script><?php echo article_js(); ?></script>
		<?php endif; ?>
	</head>
	<body class="container">
		<header class="page-header">
			<a href="<?php echo base_url(); ?>">
				<img src="<?php echo theme_url('img/logo.png'); ?>" class="img-polaroid" width="100px" height="100px" alt="<?php echo site_name(); ?>">
			</a>
			<h1><?php echo site_name(); ?></h1>
			<p class="muted"><?php echo site_description(); ?></p>
		</header>

		<?php if(has_menu_items()): ?>
		<nav role="navigation">
			<ul class="nav nav-pills">
				<?php while(menu_items()): ?>
				<li>
					<a href="<?php echo menu_url(); ?>" title="<?php echo menu_title(); ?>">
						<?php echo menu_name(); ?>
					</a>
				</li>
				<?php endwhile; ?>
			</ul>
		</nav>
		<?php endif; ?>
