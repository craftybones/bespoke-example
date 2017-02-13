var topicOptions={
  parent: 'topics',
  slides: [2,3]
};

var deck=bespoke.from("#presentation",
        [bespoke.plugins.classes(),
         bespoke.plugins.keys(),
         topics(topicOptions)]);

deck.slide(0);
