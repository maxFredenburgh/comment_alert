<?php

namespace Drupal\comment_alert\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 *
 * @Block(
 *   id = "comment_alert_block",
 *   admin_label = @Translation("Comment Alert Block"),
 *   category = @Translation("Comment Alert"),
 * )
 */
class CommentAlertBlock extends BlockBase {

    /**
     * {@inheritdoc}
     */
    public function build() {
        return array(
            '#theme' => 'block__comment_alert',
            '#title' => 'Comment Alert Block',
            '#description' => 'Cookies to track comments'
        );
    }
    public function getCacheMaxAge() {
        return 0;
    }

}