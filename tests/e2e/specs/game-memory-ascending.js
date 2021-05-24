describe("Memory game works properly", () => {
  it("Visits the app root url and shows 3 options", () => {
    cy.visit("/");
    cy.get(".option").should(($div) => {
      expect($div.get(0).innerText).to.eq("Easy (4 cards)");
      expect($div.get(1).innerText).to.eq("Medium (8 cards)");
      expect($div.get(2).innerText).to.eq("Hard (12 cards)");
    });
  });

  it("clicks easy option and shows instructions", () => {
    cy.get(".option.easy").click();
    cy.get("h3").should("have.text", "How it works:");
  });

  it("clicks Go to cards button and shows cards", () => {
    cy.get(".btn").click();
    cy.url().should("contain", "/games/memory-ascending/4/cards");

    cy.get(".Card")
      .first()
      .should(($div) => {
        const text = $div.get(0).innerText;

        expect(parseInt(text, 10) == text).to.be.true;
      });
  });

  it("clicks Play", () => {
    cy.get(".btn").click();
  });

  it("Tries to win by brute force", () => {
    tryAllCombinations();
  });
});

function tryAllCombinations() {
  const all = [
    1234, 1243, 1324, 1342, 1423, 1432, 2134, 2143, 2314, 2341, 2413, 2431,
    3124, 3142, 3214, 3241, 3412, 3421, 4123, 4132, 4213, 4231, 4312, 4321,
  ];

  all.every((number) => {
    cy.wait(500);
    const result = clickAll(number);

    cy.get("body").then(($body) => {
      const reset = $body.find(".btn--reset");

      if (reset.length > 0) {
        reset.click();
      }
    });

    return result;
  });
}

function clickAll(number) {
  let stop = true;

  cy.url().then((url) => {
    if (!url.includes("success")) {
      const indexes = number.toString().split("");

      indexes.forEach((index) => {
        cy.get("body").then(($body) => {
          const card = $body.find(`.Card:nth-child(${index})`);

          if (card.length > 0) {
            card.find(".front").click();
          }
        });
      });

      cy.get("body").then(($body) => {
        if (!$body.find(".error").length) {
          cy.url().should("contain", "/games/memory-ascending/success");
          stop = false;
        }
      });
    }
  });

  return stop;
}

export function exists(element) {
  cy.get("body").then((body) => {
    if (body.find(element).length > 0) {
      return cy.get(element);
    }

    return null;
  });
}
