describe("me.Color`", function () {

    var red_color = new me.Color(255, 0, 0);
    var green_color = new me.Color().parseCSS("green");

    describe("red_color", function () {
        it("is an instance of me.Color", function () {
            expect(red_color).toBeInstanceOf(me.Color);
        });

        it("red_color.r = 255", function () {
            expect(red_color.r).toEqual(255);
        });

        it("red_color.g = 0", function () {
            expect(red_color.g).toEqual(0);
        });

        it("red_color.b = 0", function () {
            expect(red_color.b).toEqual(0);
        });

        it("red_color hex value is #FF0000", function () {
            expect(red_color.toHex()).toEqual("#FF0000");
        });

        it("green_color.r = 0", function () {
            expect(green_color.r).toEqual(0);
        });

        it("green_color.g = 255", function () {
            expect(green_color.g).toEqual(128);
        });

        it("green_color.b = 0", function () {
            expect(green_color.b).toEqual(0);
        });

        it("green_color hex value is #008000", function () {
            expect(green_color.toHex()).toEqual("#008000");
        });
        
        it("(red_color + green_color) hex value is #FF8000", function () {
            expect(red_color.add(green_color).toHex()).toEqual("#FF8000");
        });


    });
});
