<?php get_header(); ?>

  <div id="post">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <article class="row">
      <div class="span7">
        <h3><?php the_title(); ?></h3>
        <p class="lead"><?php the_time('F jS, Y') ?></p>
        <?php the_content('Read more'); ?>
        <br />
        <?php comments_template( '/comments.php', true ); // Loads the comments.php template. ?>
      </div>
    </article>

<?php endwhile; else: ?>
  <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
<?php endif; ?>
  </div>

<?php get_footer(); ?>