<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>
	<article class="row">
		<div class="span7">
			<div id="page">
				<?php the_content('Read more'); ?>
			</div>
		</div>
	</article>
<?php endwhile; // end of the loop. ?>

<?php get_footer(); ?>