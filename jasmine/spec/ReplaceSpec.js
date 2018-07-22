
describe("replaceAllInstancesOf", function() {
  var snippet;

  it("should replace a word", function() {
    snippet = "a cool cat is crazy good";

    expect(replaceAllInstancesOf('cat', 'hat', snippet))
      .toEqual("a cool hat is crazy good");
  });

  it("should match the case", function() {
    snippet = "AlL cAt aRe gOoD";

    expect(replaceAllInstancesOf('cat', 'hat', snippet))
      .toEqual("AlL hAt aRe gOoD");
  });

  it("doesn't replace substrings", function() {
    snippet = "The use of pronouns often involves anaphora, where the meaning of the pronoun is dependent on an antecedent";

    expect(replaceAllInstancesOf('he', 'they', snippet))
      .toEqual(snippet);
  });

  it("updates the verb", function() {
    snippet = "he is a member of the bar";

    expect(replaceAllInstancesOf('he', 'they', snippet))
      .toEqual("they are a member of the bar");
  });
});

// Cheat sheet:

//describe("Player", function() {
  //var player;
  //var song;

  //beforeEach(function() {
    //player = new Player();
    //song = new Song();
  //});

  //it("should be able to play a Song", function() {
    //player.play(song);
    //expect(player.currentlyPlayingSong).toEqual(song);

    ////demonstrates use of custom matcher
    //expect(player).toBePlaying(song);
  //});

  //describe("when song has been paused", function() {
    //beforeEach(function() {
      //player.play(song);
      //player.pause();
    //});

    //it("should indicate that the song is currently paused", function() {
      //expect(player.isPlaying).toBeFalsy();

      //// demonstrates use of 'not' with a custom matcher
      //expect(player).not.toBePlaying(song);
    //});

    //it("should be possible to resume", function() {
      //player.resume();
      //expect(player.isPlaying).toBeTruthy();
      //expect(player.currentlyPlayingSong).toEqual(song);
    //});
  //});

  // demonstrates use of spies to intercept and test method calls
  //it("tells the current song if the user has made it a favorite", function() {
    //spyOn(song, 'persistFavoriteStatus');

    //player.play(song);
    //player.makeFavorite();

    //expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  //});

  ////demonstrates use of expected exceptions
  //describe("#resume", function() {
    //it("should throw an exception if song is already playing", function() {
      //player.play(song);

      //expect(function() {
        //player.resume();
      //}).toThrowError("song is already playing");
    //});
  //});
//});
