/**
 * Game class
 */

function Game() {

  this._id = _.uniqueId();

};

/**
 * Init the game with angular variables
 */
Game.prototype.init = function($rootScope, $cookieStore, $http, $timeout) {
  // Angular
  this.$rootScope = $rootScope;
  this.$cookieStore = $cookieStore;
  this.$http = $http;
  this.$timeout = $timeout;

  // Detect first load
  this.loaded = false;

  this.version = 1;
};

/**
 * Load game infos : characters, enemy & zone
 * depending the zone level
 */
Game.prototype.load = function() {
  this.loaded = true;
  /*this._loadJSON([
    ['lines', 'zones', 'enemies', 'weapons', 'materias', 'items'],
    ['characters']
  ]);*/
};

/**
 * Load JSON files
 * @param  {array} jsons
 */
Game.prototype._loadJSON = function(jsons) {
  if (jsons.length == 0) {
    this.begin();
    return;
  }

  var self = this;
  var n = 0;
  var max = jsons[0].length;
  for (var i in jsons[0]) {
    var loader = '_load_' + jsons[0][i];
    self[loader](function() {
      n++;
      if (n == max) {
        jsons.splice(0, 1);
        self._loadJSON(jsons);
      }
    });
  }
};

/**
 * Operations that begins after getting data
 */
Game.prototype.begin = function() {
  var $cookieStore = this.$cookieStore;
  var $timeout = this.$timeout;

  var save = this.$cookieStore.get('game');
  if (save) {

  } else {

  }
};

/**
 * Refresh all scopes
 */
Game.prototype.refresh = function() {
  this.$rootScope.game = this;
};

/**
 * MAIN process
 */
Game.prototype.run = function() {
  var self = this;
  this.$timeout(function() {

    self.run();
  }, 1000);
};

/**
 * Export the game for saving
 * @return {object}
 */
Game.prototype.export = function() {

  save.time = (new Date()).toLocaleString();
  save.version = this.version;

  return save;
};

/**
 * Import a save
 * @param  {Object} save
 */
Game.prototype.import = function(save) {
  this.$cookieStore.put('game', save);
};

/**
 * Save the game
 */
Game.prototype.save = function() {
  var save = this.export();
  this.$cookieStore.put('game', save);
  this.time = save.time;
  this.last_export = JSON.stringify(save);
};

/**
 * Remove the COOKIE & reset the game
 */
Game.prototype.reset = function() {
  this.$cookieStore.remove('game');
};