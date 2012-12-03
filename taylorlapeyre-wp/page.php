<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>
<article class="row">
	<div class="nine columns centered">
		<div id="page">
			<?php get_template_part( 'content', 'page' ); ?>
			<?php get_template_part( 'content', get_post_format() ); ?>
			<?php get_page( $page_id ) ?>
			<?php the_content('Read more'); ?>
		</div>
	</div>
</article>
<?php endwhile; // end of the loop. ?>

<?php get_footer(); ?>