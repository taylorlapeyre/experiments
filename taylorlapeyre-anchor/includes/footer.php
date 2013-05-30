    <footer class="row">
      <div class="well">
        <small class="muted">
          &copy; <?php echo date('Y'); ?> <?php echo site_name(); ?>. All rights reserved.
        </small>
        <p class="muted">
        <?php if(twitter_account()): ?>
          <small><a href="<?php echo twitter_url(); ?>">@<?php echo twitter_account(); ?></a></small> · 
        <?php endif; ?>
          <small><a href="<?php echo rss_url(); ?>">RSS</a></small> · 
          <small><a href="<?php echo admin_url(); ?>" title="Administer your site!">Admin</a></small>
        </p>
        
        <a id="attribution" title="Powered by Anchor CMS" href="//anchorcms.com">
          <img src="<?php echo theme_url('/img/attribution.gif'); ?>">
        </a>

        <?php if(is_debug()): ?><a id="debug_toggle" href="#debug">Show database profile</a><?php endif; ?>
      </div>
    </footer>

      <?php if(is_debug()): ?>
      <?php echo db_profile(); ?>
      <script>
      (function() {
        var g = function(i) {
          var e = document.getElementById(i);
          e.s = function(p, v) {
            this.style[p] = v;
          };
          e.g = function(p) {
            return this.style[p];
          };

          return e;
        };

        var a = g('debug_toggle'), t = g('debug_table');

        var b = function(e) {
          var d = (t.g('display') == '' || t.g('display') == 'none') ? 'block' : 'none';
          t.s('display', d);
          e.preventDefault();
          e.stopPropagation();
        };

        a.addEventListener('click', b, false);
      }());
      </script>
    <?php endif; ?>
    <!-- js files -->
    <script>var base = '<?php echo theme_url(); ?>';</script>
    <script src="<?php echo theme_url('/js/bootstrap.min.js'); ?>"></script>
    <script src="<?php echo theme_url('/js/main.js'); ?>"></script>
    <script src="http://code.jquery.com/jquery-latest.js"></script>
  </body>
</html>
