
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 645,
          poem_id: 2,
          user_id: 1
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 976,
          poem_id: 2,
          user_id: 3
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 586,
          poem_id: 2,
          user_id: 4
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 677,
          poem_id: 3,
          user_id: 1
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 467,
          poem_id: 3,
          user_id: 6
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 470,
          poem_id: 4,
          user_id: 1
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 447,
          poem_id: 4,
          user_id: 3
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 775,
          poem_id: 4,
          user_id: 4
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 67,
          poem_id: 4,
          user_id: 2
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 97,
          poem_id: 5,
          user_id: 1
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 47,
          poem_id: 5,
          user_id: 4
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 747,
          poem_id: 6,
          user_id: 3
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 647,
          poem_id: 2,
          user_id: 2
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 470,
          poem_id: 1,
          user_id: 1
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 417,
          poem_id: 3,
          user_id: 1
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 347,
          poem_id: 4,
          user_id: 1
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 471,
          poem_id: 1,
          user_id: 1
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 497,
          poem_id: 3,
          user_id: 5
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 107,
          poem_id: 3,
          user_id: 4
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 787,
          poem_id: 3,
          user_id: 2
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 476,
          poem_id: 5,
          user_id: 1
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another world descended from astronomers. Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam. Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          likes: 347,
          poem_id: 4,
          user_id: 1
        },
      ]);
    });
};