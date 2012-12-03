<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>
<article class="row">
	<div class="nine columns centered">
		<div id="post">
			<h2><?php the_title(); ?></h2>
			<h4 class="subheader"><?php the_time('F jS, Y') ?></h4>
			
			<?php get_template_part( 'content', 'single' ); ?>
			<?php get_template_part( 'content', get_post_format() ); ?>	
			<?php the_content('Read more'); ?>
			<?php get_post( $post_id ); ?> 
		</div>
	</div>
</article>

<section class="row">
	<div class="nine columns centered">
		<?php comments_template( '/comments.php', true ); // Loads the comments.php template. ?>
	</div>
</section>

<?php endwhile; // end of the loop. ?>

<?php get_footer(); ?>