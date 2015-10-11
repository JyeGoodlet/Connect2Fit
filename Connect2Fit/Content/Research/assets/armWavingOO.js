

function armWaving (canvasSelectorLoc) {

    var canvasSelector = canvasSelectorLoc;

    // Canvas
    var canvas = null;
    var context = null;

    // Iterator to animate temp data
    var counter = 0;

    // Refresh Interval for animation
    var interval = null;

    // Arm
    var rightArm = null;
    // Bones
    var shoulderToElbow = null;
    var foreArm = null;
    var hand = null;
    // Joints
    var shoulder = null;
    var elbow = null;
    var wrist = null;

    // Client ID
    var clientID = "s3406077";

    // Datapoint object
    var Point = function (cID, jID, x, y) {
        this.clientID = cID;
        this.jointID = jID;
        this.pointX = x;
        this.pointY = y;
    };

    // Body Part Objects
    var Joint = function (cID, jID, x, y) {
        this.clientID = cID;
        this.jointID = jID;
        this.jointX = x;
        this.jointY = y;
    };

    var Bone = function (cID, bID, j1, j2) {
        this.clientID = cID;
        this.BoneID = bID;
        this.joint1 = j1;
        this.joint2 = j2;
    };

    var Arm = function (cID, aID, b1, b2) {
        this.clientID = cID;
        this.armName = aID;
        this.shoulderToElbow = b1;
        this.forearm = b2;
    };

    // Startpoints
    var SHOULDER_STARTPOINT = new Point(clientID, "shoulder", 300, 150);
    var ELBOW_STARTPOINT = new Point(clientID, "elbow", 265, 225);
    var WRIST_STARTPOINT = new Point(clientID, "wrist", 295, 300);


   var init =  function() {
       // Grab HTML Canvas
       console.log(canvasSelector)
       canvas = document.getElementById(canvasSelector);
       
        context = canvas.getContext("2d");

        start();
    }()

    function start() {
        // Reset Counter 
        counter = 0;

        // Create Arm objects    
        shoulder = new Joint(clientID, "sJ", SHOULDER_STARTPOINT.pointX, SHOULDER_STARTPOINT.pointY);
        elbow = new Joint(clientID, "eJ", ELBOW_STARTPOINT.pointX, ELBOW_STARTPOINT.pointY);
        wrist = new Joint(clientID, "wJ", WRIST_STARTPOINT.pointX, WRIST_STARTPOINT.pointY);
        shoulderToElbow = new Bone(clientID, "shoulderToElbow", shoulder, elbow);
        foreArm = new Bone(clientID, "foreArm", elbow, wrist);
        rightArm = new Arm(clientID, "rightArm", shoulderToElbow, foreArm);

        //Draw Initial
        blank();
        drawBody();
        drawArm(rightArm);
    }

    function blank() {
        context.fillStyle = "LightGrey";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }

    function drawBody() {
        context.beginPath();
        // Head
        context.rect(320, 105, 35, 200);
        // Body
        context.rect(300, 150, 75, 200);
        // Right Leg
        context.rect(300, 350, 25, 150);
        // Left Leg
        context.rect(350, 350, 25, 150);
        context.fillStyle = 'black';
        context.fill();

        // Left Arm
        context.lineWidth = 10;
        context.moveTo(375, 150);
        context.lineTo(410, 225);
        context.lineTo(380, 300);
        // Hand - context.lineTo(380, 325);  
        context.stroke();
    }

    function drawArm(Arm) {

        context.beginPath();
        context.lineWidth = 10;
        // Position shoulder joint
        context.moveTo(Arm.shoulderToElbow.joint1.jointX, Arm.shoulderToElbow.joint1.jointY);
        // Draw to Elbow
        context.lineTo(Arm.forearm.joint1.jointX, Arm.forearm.joint1.jointY);
        // Draw to Wrist
        context.lineTo(Arm.forearm.joint2.jointX, Arm.forearm.joint2.jointY);
        context.stroke();
    }

    function update(Point) {

        switch (Point.jointID) {
            case "shoulder":
                shoulder.jointX = Point.pointX;
                shoulder.jointY = Point.pointY;
                break;
            case "elbow":
                elbow.jointX = Point.pointX;
                elbow.jointY = Point.pointY;
                break;
            case "wrist":
                wrist.jointX = Point.pointX;
                wrist.jointY = Point.pointY;
                break;
            default:
                break;
        }
    }

    this.animation = function() {

        interval = setInterval(function () {
            blank();
            drawBody();
            drawArm(rightArm);
            counter++;
            update(testDataPoints[counter]);
        }, 10);

    }

    function moveOne() {
        counter++;
        update(testDataPoints[counter]);
        blank();
        drawBody();
        drawArm(rightArm);
    }

    function reset() {
        clearInterval(interval);
        init();
    }


    // Test Data
    var testDataPoints = [
        new Point("s3406077", "shoulder", 300, 150),
        new Point("s3406077", "elbow", 265, 225),
        new Point("s3406077", "wrist", 295, 300),
        new Point("s3406077", "elbow", 264, 224),
        new Point("s3406077", "wrist", 294, 299),
        new Point("s3406077", "elbow", 263, 223),
        new Point("s3406077", "wrist", 293, 298),
        new Point("s3406077", "elbow", 262, 222),
        new Point("s3406077", "wrist", 292, 297),
        new Point("s3406077", "elbow", 261, 221),
        new Point("s3406077", "wrist", 291, 296),
        new Point("s3406077", "elbow", 260, 220),
        new Point("s3406077", "wrist", 290, 295),
        new Point("s3406077", "elbow", 259, 219),
        new Point("s3406077", "wrist", 289, 294),
        new Point("s3406077", "elbow", 258, 218),
        new Point("s3406077", "wrist", 288, 293),
        new Point("s3406077", "elbow", 257, 217),
        new Point("s3406077", "wrist", 287, 292),
        new Point("s3406077", "elbow", 256, 216),
        new Point("s3406077", "wrist", 286, 291),
        new Point("s3406077", "elbow", 255, 215),
        new Point("s3406077", "wrist", 285, 290),
        new Point("s3406077", "wrist", 284, 289),
        new Point("s3406077", "wrist", 283, 288),
        new Point("s3406077", "wrist", 282, 287),
        new Point("s3406077", "wrist", 281, 286),
        new Point("s3406077", "wrist", 280, 285),
        new Point("s3406077", "wrist", 279, 284),
        new Point("s3406077", "wrist", 278, 283),
        new Point("s3406077", "wrist", 277, 282),
        new Point("s3406077", "wrist", 276, 281),
        new Point("s3406077", "wrist", 275, 280),
        new Point("s3406077", "wrist", 274, 279),
        new Point("s3406077", "wrist", 273, 278),
        new Point("s3406077", "wrist", 272, 277),
        new Point("s3406077", "wrist", 271, 276),
        new Point("s3406077", "wrist", 270, 275),
        new Point("s3406077", "wrist", 269, 274),
        new Point("s3406077", "wrist", 268, 273),
        new Point("s3406077", "wrist", 267, 272),
        new Point("s3406077", "wrist", 266, 271),
        new Point("s3406077", "wrist", 265, 270),
        new Point("s3406077", "wrist", 264, 269),
        new Point("s3406077", "wrist", 263, 268),
        new Point("s3406077", "wrist", 262, 267),
        new Point("s3406077", "wrist", 261, 266),
        new Point("s3406077", "wrist", 260, 265),
        new Point("s3406077", "wrist", 259, 264),
        new Point("s3406077", "wrist", 258, 263),
        new Point("s3406077", "wrist", 257, 262),
        new Point("s3406077", "wrist", 256, 261),
        new Point("s3406077", "wrist", 255, 260),
        new Point("s3406077", "wrist", 254, 259),
        new Point("s3406077", "wrist", 253, 258),
        new Point("s3406077", "wrist", 252, 257),
        new Point("s3406077", "wrist", 251, 256),
        new Point("s3406077", "wrist", 250, 255),
        new Point("s3406077", "wrist", 249, 254),
        new Point("s3406077", "wrist", 248, 253),
        new Point("s3406077", "wrist", 247, 252),
        new Point("s3406077", "wrist", 246, 251),
        new Point("s3406077", "wrist", 245, 250),
        new Point("s3406077", "wrist", 244, 249),
        new Point("s3406077", "wrist", 243, 248),
        new Point("s3406077", "wrist", 242, 247),
        new Point("s3406077", "wrist", 241, 246),
        new Point("s3406077", "wrist", 240, 245),
        new Point("s3406077", "wrist", 239, 244),
        new Point("s3406077", "wrist", 238, 243),
        new Point("s3406077", "wrist", 237, 242),
        new Point("s3406077", "wrist", 236, 241),
        new Point("s3406077", "wrist", 235, 240),
        new Point("s3406077", "wrist", 234, 239),
        new Point("s3406077", "wrist", 233, 238),
        new Point("s3406077", "wrist", 232, 237),
        new Point("s3406077", "wrist", 231, 236),
        new Point("s3406077", "wrist", 230, 235),
        new Point("s3406077", "wrist", 229, 234),
        new Point("s3406077", "wrist", 228, 233),
        new Point("s3406077", "wrist", 227, 232),
        new Point("s3406077", "wrist", 226, 231),
        new Point("s3406077", "wrist", 225, 230),
        new Point("s3406077", "wrist", 225, 229),
        new Point("s3406077", "wrist", 225, 228),
        new Point("s3406077", "wrist", 225, 227),
        new Point("s3406077", "wrist", 225, 226),
        new Point("s3406077", "wrist", 225, 225),
        new Point("s3406077", "wrist", 225, 224),
        new Point("s3406077", "wrist", 225, 223),
        new Point("s3406077", "wrist", 225, 222),
        new Point("s3406077", "wrist", 225, 221),
        new Point("s3406077", "wrist", 225, 220),
        new Point("s3406077", "wrist", 225, 219),
        new Point("s3406077", "wrist", 225, 218),
        new Point("s3406077", "wrist", 225, 217),
        new Point("s3406077", "wrist", 225, 216),
        new Point("s3406077", "wrist", 225, 215),
        new Point("s3406077", "wrist", 225, 214),
        new Point("s3406077", "wrist", 225, 213),
        new Point("s3406077", "wrist", 225, 212),
        new Point("s3406077", "wrist", 225, 211),
        new Point("s3406077", "wrist", 225, 210),
        new Point("s3406077", "wrist", 225, 209),
        new Point("s3406077", "wrist", 225, 208),
        new Point("s3406077", "wrist", 225, 207),
        new Point("s3406077", "wrist", 225, 206),
        new Point("s3406077", "wrist", 225, 205),
        new Point("s3406077", "wrist", 225, 204),
        new Point("s3406077", "wrist", 225, 203),
        new Point("s3406077", "wrist", 225, 202),
        new Point("s3406077", "wrist", 225, 201),
        new Point("s3406077", "wrist", 225, 200),
        new Point("s3406077", "wrist", 225, 199),
        new Point("s3406077", "wrist", 225, 198),
        new Point("s3406077", "wrist", 225, 197),
        new Point("s3406077", "wrist", 225, 196),
        new Point("s3406077", "wrist", 225, 195),
        new Point("s3406077", "wrist", 225, 194),
        new Point("s3406077", "wrist", 225, 193),
        new Point("s3406077", "wrist", 225, 192),
        new Point("s3406077", "wrist", 225, 191),
        new Point("s3406077", "wrist", 225, 190),
        new Point("s3406077", "wrist", 225, 189),
        new Point("s3406077", "wrist", 225, 188),
        new Point("s3406077", "wrist", 225, 187),
        new Point("s3406077", "wrist", 225, 186),
        new Point("s3406077", "wrist", 225, 185),
        new Point("s3406077", "wrist", 225, 184),
        new Point("s3406077", "wrist", 225, 183),
        new Point("s3406077", "wrist", 225, 182),
        new Point("s3406077", "wrist", 225, 181),
        new Point("s3406077", "wrist", 225, 180),
        new Point("s3406077", "wrist", 225, 179),
        new Point("s3406077", "wrist", 225, 178),
        new Point("s3406077", "wrist", 225, 177),
        new Point("s3406077", "wrist", 225, 176),
        new Point("s3406077", "wrist", 225, 175),
        new Point("s3406077", "wrist", 225, 174),
        new Point("s3406077", "wrist", 225, 173),
        new Point("s3406077", "wrist", 225, 172),
        new Point("s3406077", "wrist", 225, 171),
        new Point("s3406077", "wrist", 225, 170),
        new Point("s3406077", "wrist", 225, 169),
        new Point("s3406077", "wrist", 225, 168),
        new Point("s3406077", "wrist", 225, 167),
        new Point("s3406077", "wrist", 225, 165),
        new Point("s3406077", "wrist", 225, 164),
        new Point("s3406077", "wrist", 225, 163),
        new Point("s3406077", "wrist", 225, 162),
        new Point("s3406077", "wrist", 225, 161),
        new Point("s3406077", "wrist", 225, 160),
        new Point("s3406077", "wrist", 225, 159),
        new Point("s3406077", "wrist", 225, 158),
        new Point("s3406077", "wrist", 225, 157),
        new Point("s3406077", "wrist", 225, 156),
        new Point("s3406077", "wrist", 225, 155),
        new Point("s3406077", "wrist", 225, 154),
        new Point("s3406077", "wrist", 225, 153),
        new Point("s3406077", "wrist", 225, 152),
        new Point("s3406077", "wrist", 225, 151),
        new Point("s3406077", "wrist", 225, 150),
        new Point("s3406077", "wrist", 225, 149),
        new Point("s3406077", "wrist", 225, 148),
        new Point("s3406077", "wrist", 225, 147),
        new Point("s3406077", "wrist", 225, 146),
        new Point("s3406077", "wrist", 225, 145),
        new Point("s3406077", "wrist", 225, 144),
        new Point("s3406077", "wrist", 225, 143),
        new Point("s3406077", "wrist", 225, 142),
        new Point("s3406077", "wrist", 225, 141),
        new Point("s3406077", "wrist", 225, 140),
        new Point("s3406077", "wrist", 226, 140),
        new Point("s3406077", "wrist", 227, 140),
        new Point("s3406077", "wrist", 228, 140),
        new Point("s3406077", "wrist", 229, 140),
        new Point("s3406077", "wrist", 230, 140),
        new Point("s3406077", "wrist", 231, 140),
        new Point("s3406077", "wrist", 232, 140),
        new Point("s3406077", "wrist", 233, 140),
        new Point("s3406077", "wrist", 234, 140),
        new Point("s3406077", "wrist", 235, 140),
        new Point("s3406077", "wrist", 234, 140),
        new Point("s3406077", "wrist", 233, 140),
        new Point("s3406077", "wrist", 232, 140),
        new Point("s3406077", "wrist", 231, 140),
        new Point("s3406077", "wrist", 230, 140),
        new Point("s3406077", "wrist", 229, 140),
        new Point("s3406077", "wrist", 228, 140),
        new Point("s3406077", "wrist", 227, 140),
        new Point("s3406077", "wrist", 226, 140),
        new Point("s3406077", "wrist", 225, 140),
        new Point("s3406077", "wrist", 225, 140),
        new Point("s3406077", "wrist", 226, 140),
        new Point("s3406077", "wrist", 227, 140),
        new Point("s3406077", "wrist", 228, 140),
        new Point("s3406077", "wrist", 229, 140),
        new Point("s3406077", "wrist", 230, 140),
        new Point("s3406077", "wrist", 231, 140),
        new Point("s3406077", "wrist", 232, 140),
        new Point("s3406077", "wrist", 233, 140),
        new Point("s3406077", "wrist", 234, 140),
        new Point("s3406077", "wrist", 235, 140),
        new Point("s3406077", "wrist", 234, 140),
        new Point("s3406077", "wrist", 233, 140),
        new Point("s3406077", "wrist", 232, 140),
        new Point("s3406077", "wrist", 231, 140),
        new Point("s3406077", "wrist", 230, 140),
        new Point("s3406077", "wrist", 229, 140),
        new Point("s3406077", "wrist", 228, 140),
        new Point("s3406077", "wrist", 227, 140),
        new Point("s3406077", "wrist", 226, 140),
        new Point("s3406077", "wrist", 225, 140),
        new Point("s3406077", "wrist", 225, 140),
        new Point("s3406077", "wrist", 226, 140),
        new Point("s3406077", "wrist", 227, 140),
        new Point("s3406077", "wrist", 228, 140),
        new Point("s3406077", "wrist", 229, 140),
        new Point("s3406077", "wrist", 230, 140),
        new Point("s3406077", "wrist", 231, 140),
        new Point("s3406077", "wrist", 232, 140),
        new Point("s3406077", "wrist", 233, 140),
        new Point("s3406077", "wrist", 234, 140),
        new Point("s3406077", "wrist", 235, 140),
        new Point("s3406077", "wrist", 234, 140),
        new Point("s3406077", "wrist", 233, 140),
        new Point("s3406077", "wrist", 232, 140),
        new Point("s3406077", "wrist", 231, 140),
        new Point("s3406077", "wrist", 230, 140),
        new Point("s3406077", "wrist", 231, 140),
        new Point("s3406077", "wrist", 232, 140),
        new Point("s3406077", "wrist", 233, 140),
        new Point("s3406077", "wrist", 234, 140),
        new Point("s3406077", "wrist", 235, 140),
        new Point("s3406077", "wrist", 234, 140),
        new Point("s3406077", "wrist", 233, 140),
        new Point("s3406077", "wrist", 232, 140),
        new Point("s3406077", "wrist", 231, 140),
        new Point("s3406077", "wrist", 230, 140),
        new Point("s3406077", "wrist", 229, 140),
        new Point("s3406077", "wrist", 228, 140),
        new Point("s3406077", "wrist", 227, 140),
        new Point("s3406077", "wrist", 226, 140),
        new Point("s3406077", "wrist", 225, 140),
        new Point("s3406077", "wrist", 225, 140),
        new Point("s3406077", "wrist", 226, 140),
        new Point("s3406077", "wrist", 227, 140),
        new Point("s3406077", "wrist", 228, 140),
        new Point("s3406077", "wrist", 229, 140),
        new Point("s3406077", "wrist", 230, 140),
        new Point("s3406077", "wrist", 231, 140),
        new Point("s3406077", "wrist", 232, 140),
        new Point("s3406077", "wrist", 233, 140),
        new Point("s3406077", "wrist", 234, 140),
        new Point("s3406077", "wrist", 235, 140),
        new Point("s3406077", "wrist", 234, 140),
        new Point("s3406077", "wrist", 233, 140),
        new Point("s3406077", "wrist", 232, 140),
        new Point("s3406077", "wrist", 231, 140),
        new Point("s3406077", "wrist", 230, 140),
        new Point("s3406077", "wrist", 229, 140),
        new Point("s3406077", "wrist", 228, 140),
        new Point("s3406077", "wrist", 227, 140),
        new Point("s3406077", "wrist", 226, 140),
        new Point("s3406077", "wrist", 225, 140),
        new Point("s3406077", "wrist", 225, 140),
        new Point("s3406077", "wrist", 226, 140),
        new Point("s3406077", "wrist", 227, 140),
        new Point("s3406077", "wrist", 228, 140),
        new Point("s3406077", "wrist", 229, 140),
        new Point("s3406077", "wrist", 230, 140),
        new Point("s3406077", "wrist", 231, 140),
        new Point("s3406077", "wrist", 232, 140),
        new Point("s3406077", "wrist", 233, 140),
        new Point("s3406077", "wrist", 234, 140),
        new Point("s3406077", "wrist", 235, 140),
        new Point("s3406077", "wrist", 234, 140),
        new Point("s3406077", "wrist", 233, 140),
        new Point("s3406077", "wrist", 232, 140),
        new Point("s3406077", "wrist", 231, 140),
        new Point("s3406077", "wrist", 230, 140)];








}

