function avatar(divNme) {

    this.divName = divNme;
    this.active = true;

    // Tracked Points
    this.trackedPoint_Head = null;
    this.trackedPoint_Body = null;
    this.trackedPoint_LeftShoulder = null;
    this.trackedPoint_LeftElbow = null;
    this.trackedPoint_LeftWrist = null;
    this.trackedPoint_RightShoulder = null;
    this.trackedPoint_RightElbow = null;
    this.trackedPoint_RightWrist = null;
    this.trackedPoint_LeftHip = null;
    this.trackedPoint_LeftKnee = null;
    this.trackedPoint_LeftAnkle = null;
    this.trackedPoint_RightHip = null;
    this.trackedPoint_RightKnee = null;
    this.trackedPoint_RightAnkle = null;

    // Body
    this.bodyTR = null;
    this.bodyTL = null;
    this.bodyBL = null;
    this.bodyBR = null;
    this.bodyCRV = null;
    // Jumper Stripe
    this.jmprStrpTR = null;
    this.jmprStrpTL = null;
    this.jmprStrpBL = null;
    this.jmprStrpBR = null;
    // Head & Neck
    this.neckTL = null;
    this.neckTR = null;
    this.neckBR = null;
    this.neckBL = null;
    this.headCNTR = null;
    // Right Bicep
    this.rBicepTR = null;
    this.rBicepBR = null;
    this.rBicepBL = null;
    this.rBicepTL = null;
    this.rBicepTCRV = null;
    this.rBicepBCRV = null;
    // Right Forearm
    this.rForearmTR = null;
    this.rForearmBR = null;
    this.rForearmBL = null;
    this.rForearmTL = null;
    this.rForearmTCRV = null;
    this.rForearmBCRV = null;
    // Right Hand
    this.rHandTR = null;
    this.rHandBR = null;
    this.rHandBL = null;
    this.rHandTL = null;
    this.rHandTCRV = null;
    this.rHandBCRV = null;
    // Right Wrist
    this.rWristTR = null;
    this.rWristBR = null;
    this.rWristBL = null;
    this.rWristTL = null;

    // Left Bicep
    this.lBicepTR = null;
    this.lBicepBR = null;
    this.lBicepBL = null;
    this.lBicepTL = null;
    this.lBicepTCRV = null;
    this.lBicepBCRV = null;
    // Left Forearm
    this.lForearmTR = null;
    this.lForearmBR = null;
    this.lForearmBL = null;
    this.lForearmTL = null;
    this.lForearmTCRV = null;
    this.lForearmBCRV = null;
    // Left Hand
    this.lHandTR = null;
    this.lHandBR = null;
    this.lHandBL = null;
    this.lHandTL = null;
    this.lHandTCRV = null;
    this.lHandBCRV = null;
    // Left Wrist
    this.lWristTR = null;
    this.lWristBR = null;
    this.lWristBL = null;
    this.lWristTL = null;

    // Right Thigh
    this.rThighTR = null;
    this.rThighBR = null;
    this.rThighBL = null;
    this.rThighTL = null;
    this.rThighTCRV = null;
    this.rThighBCRV = null;
    // Right Calf
    this.rCalfTR = null;
    this.rCalfBR = null;
    this.rCalfBL = null;
    this.rCalfTL = null;
    this.rCalfTCRV = null;
    this.rCalfBCRV = null;
    // Right Shoe
    this.rShoeTPT1 = null;
    this.rShoeTPT2 = null;
    this.rShoeTPT3 = null;
    this.rShoeTPT4 = null;
    this.rShoeTPT5 = null;
    this.rShoeTPT6 = null;
    this.rShoeTPT7 = null;
    // Left Thigh
    this.lThighTR = null;
    this.lThighBR = null;
    this.lThighBL = null;
    this.lThighTL = null;
    this.lThighTCRV = null;
    this.lThighBCRV = null;
    // Left Calf
    this.lCalfTR = null;
    this.lCalfBR = null;
    this.lCalfBL = null;
    this.lCalfTL = null;
    this.lCalfTCRV = null;
    this.lCalfBCRV = null;
    // Left Shoe
    this.lShoeTPT1 = null;
    this.lShoeTPT2 = null;
    this.lShoeTPT3 = null;
    this.lShoeTPT4 = null;
    this.lShoeTPT5 = null;
    this.lShoeTPT6 = null;
    this.lShoeTPT7 = null;

    var trackPoint = function (name, x, y) {
        this.tpName = name;
        this.pointX = x;
        this.pointY = y;
        this.oldPointX = x;
        this.oldPointY = y;

    }
    var paintPoint = function (pTP, rTP, x, y) {
        this.parentTrackPoint = pTP;
        this.relatedTrackPoint = rTP;
        this.pointX = x;
        this.pointY = y;
        this.parAngle = 0;
        this.parDist = 0;
    }

    // Avatar Body Colour Variables
    this.jumperColour = '#E82C4F';
    this.jumperAccent = '#CC1A3B';
    this.skinColour = '#FCDABE';
    this.legColour = '#425156';
    this.shoesColour = '#869AB5';
    this.shoesAccent = '#A1B2C9';
    
    this.setInitialPoints = function () {
        // Tracked Points
        this.trackedPoint_Head = new trackPoint('Head', 225, 50);
        this.trackedPoint_Body = new trackPoint('Body', 225, 225);
        this.trackedPoint_LeftShoulder = new trackPoint('L Shoulder', 270, 165);
        this.trackedPoint_LeftElbow = new trackPoint('L Elbow', 270, 225);
        this.trackedPoint_LeftWrist = new trackPoint('L Hand', 270, 290);
        this.trackedPoint_RightShoulder = new trackPoint('R Shoulder', 180, 165);
        this.trackedPoint_RightElbow = new trackPoint('R Elbow', 180, 225);
        this.trackedPoint_RightWrist = new trackPoint('R Hand', 180, 290);
        this.trackedPoint_LeftHip = new trackPoint('L Hip', 245, 275);
        this.trackedPoint_LeftKnee = new trackPoint('L Knee', 245, 345);
        this.trackedPoint_LeftAnkle = new trackPoint('L Foot', 245, 420);
        this.trackedPoint_RightHip = new trackPoint('R Hip', 200, 275);
        this.trackedPoint_RightKnee = new trackPoint('R Knee', 200, 345);
        this.trackedPoint_RightAnkle = new trackPoint('R Foot', 200, 420);

        // Body
        this.bodyTR = new paintPoint(this.trackedPoint_Head, this.trackedPoint_Body, 185, 165);
        this.bodyTR.parDist = this.setParDistance(this.bodyTR);
        this.bodyTR.parAngle = this.setParAngle(this.bodyTR);
        this.bodyTL = new paintPoint(this.trackedPoint_Body, this.trackedPoint_Head, 260, 165);
        this.bodyTL.parDist = this.setParDistance(this.bodyTL);
        this.bodyTL.parAngle = this.setParAngle(this.bodyTL);
        this.bodyBL = new paintPoint(this.trackedPoint_Body, this.trackedPoint_Head, 260, 280);
        this.bodyBL.parDist = this.setParDistance(this.bodyBL);
        this.bodyBL.parAngle = this.setParAngle(this.bodyBL);
        this.bodyBR = new paintPoint(this.trackedPoint_Head, this.trackedPoint_Body, 185, 280);
        this.bodyBR.parDist = this.setParDistance(this.bodyBR);
        this.bodyBR.parAngle = this.setParAngle(this.bodyBR);
        this.bodyCRV = new paintPoint(this.trackedPoint_Body, this.trackedPoint_Head, 225, 330);
        this.bodyCRV.parDist = this.setParDistance(this.bodyCRV);
        this.bodyCRV.parAngle = this.setParAngle(this.bodyCRV);
        // Jumper Stripe
        this.jmprStrpTR = new paintPoint(this.trackedPoint_Head, this.trackedPoint_Body, 185, 205);
        this.jmprStrpTR.parDist = this.setParDistance(this.jmprStrpTR);
        this.jmprStrpTR.parAngle = this.setParAngle(this.jmprStrpTR);
        this.jmprStrpTL = new paintPoint(this.trackedPoint_Body, this.trackedPoint_Head, 260, 205);
        this.jmprStrpTL.parDist = this.setParDistance(this.jmprStrpTL);
        this.jmprStrpTL.parAngle = this.setParAngle(this.jmprStrpTL);
        this.jmprStrpBL = new paintPoint(this.trackedPoint_Body, this.trackedPoint_Head, 260, 230);
        this.jmprStrpBL.parDist = this.setParDistance(this.jmprStrpBL);
        this.jmprStrpBL.parAngle = this.setParAngle(this.jmprStrpBL);
        this.jmprStrpBR = new paintPoint(this.trackedPoint_Head, this.trackedPoint_Body, 185, 230);
        this.jmprStrpBR.parDist = this.setParDistance(this.jmprStrpBR);
        this.jmprStrpBR.parAngle = this.setParAngle(this.jmprStrpBR);
        
        // Head & Neck
        this.neckTL = new paintPoint(this.trackedPoint_Body, this.trackedPoint_Head, 207.5, 145);
        this.neckTL.parDist = this.setParDistance(this.neckTL);
        this.neckTL.parAngle = this.setParAngle(this.neckTL);
        this.neckTR = new paintPoint(this.trackedPoint_Head, this.trackedPoint_Body, 237.5, 145);
        this.neckTR.parDist = this.setParDistance(this.neckTR);
        this.neckTR.parAngle = this.setParAngle(this.neckTR);
        this.neckBR = new paintPoint(this.trackedPoint_Head, this.trackedPoint_Body, 237.5, 165);
        this.neckBR.parDist = this.setParDistance(this.neckBR);
        this.neckBR.parAngle = this.setParAngle(this.neckBR);
        this.neckBL = new paintPoint(this.trackedPoint_Body, this.trackedPoint_Head, 207.5, 165);
        this.neckBL.parDist = this.setParDistance(this.neckBL);
        this.neckBL.parAngle = this.setParAngle(this.neckBL);
        this.headCNTR = new paintPoint(this.trackedPoint_Head, this.trackedPoint_Body, 225, 100);
        this.headCNTR.parDist = this.setParDistance(this.headCNTR);
        this.headCNTR.parAngle = this.setParAngle(this.headCNTR);

        // Right Bicep
        this.rBicepTR = new paintPoint(this.trackedPoint_RightShoulder, this.trackedPoint_RightElbow, 165, 170);
        this.rBicepTR.parDist = this.setParDistance(this.rBicepTR);
        this.rBicepTR.parAngle = this.setParAngle(this.rBicepTR);
        this.rBicepBR = new paintPoint(this.trackedPoint_RightShoulder, this.trackedPoint_RightElbow, 165, 230);
        this.rBicepBR.parDist = this.setParDistance(this.rBicepBR);
        this.rBicepBR.parAngle = this.setParAngle(this.rBicepBR);
        this.rBicepBL = new paintPoint(this.trackedPoint_RightElbow, this.trackedPoint_RightShoulder, 190, 230);
        this.rBicepBL.parDist = this.setParDistance(this.rBicepBL);
        this.rBicepBL.parAngle = this.setParAngle(this.rBicepBL);
        this.rBicepTL = new paintPoint(this.trackedPoint_RightElbow, this.trackedPoint_RightShoulder, 190, 170);
        this.rBicepTL.parDist = this.setParDistance(this.rBicepTL);
        this.rBicepTL.parAngle = this.setParAngle(this.rBicepTL);
        this.rBicepTCRV = new paintPoint(this.trackedPoint_RightShoulder, this.trackedPoint_RightElbow, 177.5, 155);
        this.rBicepTCRV.parDist = this.setParDistance(this.rBicepTCRV);
        this.rBicepTCRV.parAngle = this.setParAngle(this.rBicepTCRV);
        this.rBicepBCRV = new paintPoint(this.trackedPoint_RightElbow, this.trackedPoint_RightShoulder, 177.5, 245);
        this.rBicepBCRV.parDist = this.setParDistance(this.rBicepBCRV);
        this.rBicepBCRV.parAngle = this.setParAngle(this.rBicepBCRV);

        // Right Forearm
        this.rForearmTR = new paintPoint(this.trackedPoint_RightElbow, this.trackedPoint_RightWrist, 165, 235);
        this.rForearmTR.parDist = this.setParDistance(this.rForearmTR);
        this.rForearmTR.parAngle = this.setParAngle(this.rForearmTR);
        this.rForearmBR = new paintPoint(this.trackedPoint_RightElbow, this.trackedPoint_RightWrist, 165, 285);
        this.rForearmBR.parDist = this.setParDistance(this.rForearmBR);
        this.rForearmBR.parAngle = this.setParAngle(this.rForearmBR);
        this.rForearmBL = new paintPoint(this.trackedPoint_RightWrist, this.trackedPoint_RightElbow, 190, 285);
        this.rForearmBL.parDist = this.setParDistance(this.rForearmBL);
        this.rForearmBL.parAngle = this.setParAngle(this.rForearmBL);
        this.rForearmTL = new paintPoint(this.trackedPoint_RightWrist, this.trackedPoint_RightElbow, 190, 235);
        this.rForearmTL.parDist = this.setParDistance(this.rForearmTL);
        this.rForearmTL.parAngle = this.setParAngle(this.rForearmTL);
        this.rForearmTCRV = new paintPoint(this.trackedPoint_RightElbow, this.trackedPoint_RightWrist, 177.5, 225);
        this.rForearmTCRV.parDist = this.setParDistance(this.rForearmTCRV);
        this.rForearmTCRV.parAngle = this.setParAngle(this.rForearmTCRV);
        this.rForearmBCRV = new paintPoint(this.trackedPoint_RightWrist, this.trackedPoint_RightElbow, 177.5, 305);
        this.rForearmBCRV.parDist = this.setParDistance(this.rForearmBCRV);
        this.rForearmBCRV.parAngle = this.setParAngle(this.rForearmBCRV);
        // Right Hand
        this.rHandTR = new paintPoint(this.trackedPoint_RightElbow, this.trackedPoint_RightWrist, 165, 285);
        this.rHandTR.parDist = this.setParDistance(this.rHandTR);
        this.rHandTR.parAngle = this.setParAngle(this.rHandTR);
        this.rHandBR = new paintPoint(this.trackedPoint_RightElbow, this.trackedPoint_RightWrist, 165, 295);
        this.rHandBR.parDist = this.setParDistance(this.rHandBR);
        this.rHandBR.parAngle = this.setParAngle(this.rHandBR);
        this.rHandBL = new paintPoint(this.trackedPoint_RightWrist, this.trackedPoint_RightElbow, 190, 295);
        this.rHandBL.parDist = this.setParDistance(this.rHandBL);
        this.rHandBL.parAngle = this.setParAngle(this.rHandBL);
        this.rHandTL = new paintPoint(this.trackedPoint_RightWrist, this.trackedPoint_RightElbow, 190, 285);
        this.rHandTL.parDist = this.setParDistance(this.rHandTL);
        this.rHandTL.parAngle = this.setParAngle(this.rHandTL);
        this.rHandTCRV = new paintPoint(this.trackedPoint_RightElbow, this.trackedPoint_RightWrist, 177.5, 270);
        this.rHandTCRV.parDist = this.setParDistance(this.rHandTCRV);
        this.rHandTCRV.parAngle = this.setParAngle(this.rHandTCRV);
        this.rHandBCRV = new paintPoint(this.trackedPoint_RightWrist, this.trackedPoint_RightElbow, 177.5, 310);
        this.rHandBCRV.parDist = this.setParDistance(this.rHandBCRV);
        this.rHandBCRV.parAngle = this.setParAngle(this.rHandBCRV);
        
        // Left Bicep
        this.lBicepTR = new paintPoint(this.trackedPoint_LeftShoulder, this.trackedPoint_LeftElbow, 255, 170);
        this.lBicepTR.parDist = this.setParDistance(this.lBicepTR);
        this.lBicepTR.parAngle = this.setParAngle(this.lBicepTR);
        this.lBicepBR = new paintPoint(this.trackedPoint_LeftShoulder, this.trackedPoint_LeftElbow, 255, 230);
        this.lBicepBR.parDist = this.setParDistance(this.lBicepBR);
        this.lBicepBR.parAngle = this.setParAngle(this.lBicepBR);
        this.lBicepBL = new paintPoint(this.trackedPoint_LeftElbow, this.trackedPoint_LeftShoulder, 280, 230);
        this.lBicepBL.parDist = this.setParDistance(this.lBicepBL);
        this.lBicepBL.parAngle = this.setParAngle(this.lBicepBL);
        this.lBicepTL = new paintPoint(this.trackedPoint_LeftElbow, this.trackedPoint_LeftShoulder, 280, 170);
        this.lBicepTL.parDist = this.setParDistance(this.lBicepTL);
        this.lBicepTL.parAngle = this.setParAngle(this.lBicepTL);
        this.lBicepTCRV = new paintPoint(this.trackedPoint_LeftShoulder, this.trackedPoint_LeftElbow, 267.5, 155);
        this.lBicepTCRV.parDist = this.setParDistance(this.lBicepTCRV);
        this.lBicepTCRV.parAngle = this.setParAngle(this.lBicepTCRV);
        this.lBicepBCRV = new paintPoint(this.trackedPoint_LeftElbow, this.trackedPoint_LeftShoulder, 267.5, 245);
        this.lBicepBCRV.parDist = this.setParDistance(this.lBicepBCRV);
        this.lBicepBCRV.parAngle = this.setParAngle(this.lBicepBCRV);
        // Left Forearm
        this.lForearmTR = new paintPoint(this.trackedPoint_LeftElbow, this.trackedPoint_LeftWrist, 255, 235);
        this.lForearmTR.parDist = this.setParDistance(this.lForearmTR);
        this.lForearmTR.parAngle = this.setParAngle(this.lForearmTR);
        this.lForearmBR = new paintPoint(this.trackedPoint_LeftElbow, this.trackedPoint_LeftWrist, 255, 285);
        this.lForearmBR.parDist = this.setParDistance(this.lForearmBR);
        this.lForearmBR.parAngle = this.setParAngle(this.lForearmBR);
        this.lForearmBL = new paintPoint(this.trackedPoint_LeftWrist, this.trackedPoint_LeftElbow, 280, 285);
        this.lForearmBL.parDist = this.setParDistance(this.lForearmBL);
        this.lForearmBL.parAngle = this.setParAngle(this.lForearmBL);
        this.lForearmTL = new paintPoint(this.trackedPoint_LeftWrist, this.trackedPoint_LeftElbow, 280, 235);
        this.lForearmTL.parDist = this.setParDistance(this.lForearmTL);
        this.lForearmTL.parAngle = this.setParAngle(this.lForearmTL);
        this.lForearmTCRV = new paintPoint(this.trackedPoint_LeftElbow, this.trackedPoint_LeftWrist, 267.5, 225);
        this.lForearmTCRV.parDist = this.setParDistance(this.lForearmTCRV);
        this.lForearmTCRV.parAngle = this.setParAngle(this.lForearmTCRV);
        this.lForearmBCRV = new paintPoint(this.trackedPoint_LeftWrist, this.trackedPoint_LeftElbow, 267.5, 305);
        this.lForearmBCRV.parDist = this.setParDistance(this.lForearmBCRV);
        this.lForearmBCRV.parAngle = this.setParAngle(this.lForearmBCRV);
        // Left Hand
        this.lHandTR = new paintPoint(this.trackedPoint_LeftWrist, this.trackedPoint_LeftElbow, 255, 285);
        this.lHandTR.parDist = this.setParDistance(this.lHandTR);
        this.lHandTR.parAngle = this.setParAngle(this.lHandTR);
        this.lHandBR = new paintPoint(this.trackedPoint_LeftWrist, this.trackedPoint_LeftElbow, 255, 295);
        this.lHandBR.parDist = this.setParDistance(this.lHandBR);
        this.lHandBR.parAngle = this.setParAngle(this.lHandBR);
        this.lHandBL = new paintPoint(this.trackedPoint_LeftElbow, this.trackedPoint_LeftWrist, 280, 295);
        this.lHandBL.parDist = this.setParDistance(this.lHandBL);
        this.lHandBL.parAngle = this.setParAngle(this.lHandBL);
        this.lHandTL = new paintPoint(this.trackedPoint_LeftElbow, this.trackedPoint_LeftWrist, 280, 285);
        this.lHandTL.parDist = this.setParDistance(this.lHandTL);
        this.lHandTL.parAngle = this.setParAngle(this.lHandTL);
        this.lHandTCRV = new paintPoint(this.trackedPoint_LeftWrist, this.trackedPoint_LeftElbow, 267.5, 270);
        this.lHandTCRV.parDist = this.setParDistance(this.lHandTCRV);
        this.lHandTCRV.parAngle = this.setParAngle(this.lHandTCRV);
        this.lHandBCRV = new paintPoint(this.trackedPoint_LeftElbow, this.trackedPoint_LeftWrist, 267.5, 310);
        this.lHandBCRV.parDist = this.setParDistance(this.lHandBCRV);
        this.lHandBCRV.parAngle = this.setParAngle(this.lHandBCRV);        

        // Right Thigh
        this.rThighTR = new paintPoint(this.trackedPoint_RightHip, this.trackedPoint_RightKnee, 185, 280);
        this.rThighTR.parDist = this.setParDistance(this.rThighTR);
        this.rThighTR.parAngle = this.setParAngle(this.rThighTR);
        this.rThighBR = new paintPoint(this.trackedPoint_RightHip, this.trackedPoint_RightKnee, 185, 345);
        this.rThighBR.parDist = this.setParDistance(this.rThighBR);
        this.rThighBR.parAngle = this.setParAngle(this.rThighBR);
        this.rThighBL = new paintPoint(this.trackedPoint_RightKnee, this.trackedPoint_RightHip, 215, 345);
        this.rThighBL.parDist = this.setParDistance(this.rThighBL);
        this.rThighBL.parAngle = this.setParAngle(this.rThighBL);
        this.rThighTL = new paintPoint(this.trackedPoint_RightKnee, this.trackedPoint_RightHip, 215, 280);
        this.rThighTL.parDist = this.setParDistance(this.rThighTL);
        this.rThighTL.parAngle = this.setParAngle(this.rThighTL);
        this.rThighTCRV = new paintPoint(this.trackedPoint_RightHip, this.trackedPoint_RightKnee, 200, 265);
        this.rThighTCRV.parDist = this.setParDistance(this.rThighTCRV);
        this.rThighTCRV.parAngle = this.setParAngle(this.rThighTCRV);
        this.rThighBCRV = new paintPoint(this.trackedPoint_RightKnee, this.trackedPoint_RightHip, 200, 360);
        this.rThighBCRV.parDist = this.setParDistance(this.rThighBCRV);
        this.rThighBCRV.parAngle = this.setParAngle(this.rThighBCRV);
        // Right Calf
        this.rCalfTR = new paintPoint(this.trackedPoint_RightKnee, this.trackedPoint_RightAnkle, 185, 350);
        this.rCalfTR.parDist = this.setParDistance(this.rCalfTR);
        this.rCalfTR.parAngle = this.setParAngle(this.rCalfTR);
        this.rCalfBR = new paintPoint(this.trackedPoint_RightKnee, this.trackedPoint_RightAnkle, 185, 410);
        this.rCalfBR.parDist = this.setParDistance(this.rCalfBR);
        this.rCalfBR.parAngle = this.setParAngle(this.rCalfBR);
        this.rCalfBL = new paintPoint(this.trackedPoint_RightAnkle, this.trackedPoint_RightKnee, 215, 410);
        this.rCalfBL.parDist = this.setParDistance(this.rCalfBL);
        this.rCalfBL.parAngle = this.setParAngle(this.rCalfBL);
        this.rCalfTL = new paintPoint(this.trackedPoint_RightAnkle, this.trackedPoint_RightKnee, 215, 350);
        this.rCalfTL.parDist = this.setParDistance(this.rCalfTL);
        this.rCalfTL.parAngle = this.setParAngle(this.rCalfTL);
        this.rCalfTCRV = new paintPoint(this.trackedPoint_RightKnee, this.trackedPoint_RightAnkle, 200, 335);
        this.rCalfTCRV.parDist = this.setParDistance(this.rCalfTCRV);
        this.rCalfTCRV.parAngle = this.setParAngle(this.rCalfTCRV);
        this.rCalfBCRV = new paintPoint(this.trackedPoint_RightAnkle, this.trackedPoint_RightKnee, 200, 425);
        this.rCalfBCRV.parDist = this.setParDistance(this.rCalfBCRV);
        this.rCalfBCRV.parAngle = this.setParAngle(this.rCalfBCRV);
        // Right Shoe
        this.rShoeTPT1 = new paintPoint(this.trackedPoint_RightKnee, this.trackedPoint_RightAnkle, 185, 410);
        this.rShoeTPT1.parDist = this.setParDistance(this.rShoeTPT1);
        this.rShoeTPT1.parAngle = this.setParAngle(this.rShoeTPT1);
        this.rShoeTPT2 = new paintPoint(this.trackedPoint_RightAnkle, this.trackedPoint_RightKnee, 215, 410);
        this.rShoeTPT2.parDist = this.setParDistance(this.rShoeTPT2);
        this.rShoeTPT2.parAngle = this.setParAngle(this.rShoeTPT2);
        this.rShoeTPT3 = new paintPoint(this.trackedPoint_RightAnkle, this.trackedPoint_RightKnee, 215, 420);
        this.rShoeTPT3.parDist = this.setParDistance(this.rShoeTPT3);
        this.rShoeTPT3.parAngle = this.setParAngle(this.rShoeTPT3);
        this.rShoeTPT4 = new paintPoint(this.trackedPoint_RightKnee, this.trackedPoint_RightAnkle, 195, 437.5);
        this.rShoeTPT4.parDist = this.setParDistance(this.rShoeTPT4);
        this.rShoeTPT4.parAngle = this.setParAngle(this.rShoeTPT4);
        this.rShoeTPT5 = new paintPoint(this.trackedPoint_RightKnee, this.trackedPoint_RightAnkle, 185, 450);
        this.rShoeTPT5.parDist = this.setParDistance(this.rShoeTPT5);
        this.rShoeTPT5.parAngle = this.setParAngle(this.rShoeTPT5);
        this.rShoeTPT6 = new paintPoint(this.trackedPoint_RightKnee, this.trackedPoint_RightAnkle, 170, 440);
        this.rShoeTPT6.parDist = this.setParDistance(this.rShoeTPT6);
        this.rShoeTPT6.parAngle = this.setParAngle(this.rShoeTPT6);
        this.rShoeTPT7 = new paintPoint(this.trackedPoint_RightKnee, this.trackedPoint_RightAnkle, 165, 430);
        this.rShoeTPT7.parDist = this.setParDistance(this.rShoeTPT7);
        this.rShoeTPT7.parAngle = this.setParAngle(this.rShoeTPT7);

        // Left Thigh
        this.lThighTR = new paintPoint(this.trackedPoint_LeftHip, this.trackedPoint_LeftKnee, 230, 280);
        this.lThighTR.parDist = this.setParDistance(this.lThighTR);
        this.lThighTR.parAngle = this.setParAngle(this.lThighTR);
        this.lThighBR = new paintPoint(this.trackedPoint_LeftHip, this.trackedPoint_LeftKnee, 230, 345);
        this.lThighBR.parDist = this.setParDistance(this.lThighBR);
        this.lThighBR.parAngle = this.setParAngle(this.lThighBR);
        this.lThighBL = new paintPoint(this.trackedPoint_LeftKnee, this.trackedPoint_LeftHip, 260, 345);
        this.lThighBL.parDist = this.setParDistance(this.lThighBL);
        this.lThighBL.parAngle = this.setParAngle(this.lThighBL);
        this.lThighTL = new paintPoint(this.trackedPoint_LeftKnee, this.trackedPoint_LeftHip, 260, 280);
        this.lThighTL.parDist = this.setParDistance(this.lThighTL);
        this.lThighTL.parAngle = this.setParAngle(this.lThighTL);
        this.lThighTCRV = new paintPoint(this.trackedPoint_LeftHip, this.trackedPoint_LeftKnee, 245, 265);
        this.lThighTCRV.parDist = this.setParDistance(this.lThighTCRV);
        this.lThighTCRV.parAngle = this.setParAngle(this.lThighTCRV);
        this.lThighBCRV = new paintPoint(this.trackedPoint_LeftKnee, this.trackedPoint_LeftHip, 245, 360);
        this.lThighBCRV.parDist = this.setParDistance(this.lThighBCRV);
        this.lThighBCRV.parAngle = this.setParAngle(this.lThighBCRV);
        // Left Calf
        this.lCalfTR = new paintPoint(this.trackedPoint_LeftKnee, this.trackedPoint_LeftAnkle, 230, 350);
        this.lCalfTR.parDist = this.setParDistance(this.lCalfTR);
        this.lCalfTR.parAngle = this.setParAngle(this.lCalfTR);
        this.lCalfBR = new paintPoint(this.trackedPoint_LeftKnee, this.trackedPoint_LeftAnkle, 230, 410);
        this.lCalfBR.parDist = this.setParDistance(this.lCalfBR);
        this.lCalfBR.parAngle = this.setParAngle(this.lCalfBR);
        this.lCalfBL = new paintPoint(this.trackedPoint_LeftAnkle, this.trackedPoint_LeftKnee, 260, 410);
        this.lCalfBL.parDist = this.setParDistance(this.lCalfBL);
        this.lCalfBL.parAngle = this.setParAngle(this.lCalfBL);
        this.lCalfTL = new paintPoint(this.trackedPoint_LeftAnkle, this.trackedPoint_LeftKnee, 260, 350);
        this.lCalfTL.parDist = this.setParDistance(this.lCalfTL);
        this.lCalfTL.parAngle = this.setParAngle(this.lCalfTL);
        this.lCalfTCRV = new paintPoint(this.trackedPoint_LeftKnee, this.trackedPoint_LeftAnkle, 245, 335);
        this.lCalfTCRV.parDist = this.setParDistance(this.lCalfTCRV);
        this.lCalfTCRV.parAngle = this.setParAngle(this.lCalfTCRV);
        this.lCalfBCRV = new paintPoint(this.trackedPoint_LeftAnkle, this.trackedPoint_LeftKnee, 245, 425);
        this.lCalfBCRV.parDist = this.setParDistance(this.lCalfBCRV);
        this.lCalfBCRV.parAngle = this.setParAngle(this.lCalfBCRV);
        // Left Shoe
        this.lShoeTPT1 = new paintPoint(this.trackedPoint_LeftAnkle, this.trackedPoint_LeftKnee, 260, 410);
        this.lShoeTPT1.parDist = this.setParDistance(this.lShoeTPT1);
        this.lShoeTPT1.parAngle = this.setParAngle(this.lShoeTPT1);
        this.lShoeTPT2 = new paintPoint(this.trackedPoint_LeftKnee, this.trackedPoint_LeftAnkle, 230, 410);
        this.lShoeTPT2.parDist = this.setParDistance(this.lShoeTPT2);
        this.lShoeTPT2.parAngle = this.setParAngle(this.lShoeTPT2);
        this.lShoeTPT3 = new paintPoint(this.trackedPoint_LeftKnee, this.trackedPoint_LeftAnkle, 230, 420);
        this.lShoeTPT3.parDist = this.setParDistance(this.lShoeTPT3);
        this.lShoeTPT3.parAngle = this.setParAngle(this.lShoeTPT3);
        this.lShoeTPT4 = new paintPoint(this.trackedPoint_LeftAnkle, this.trackedPoint_LeftKnee, 250, 437.5);
        this.lShoeTPT4.parDist = this.setParDistance(this.lShoeTPT4);
        this.lShoeTPT4.parAngle = this.setParAngle(this.lShoeTPT4);
        this.lShoeTPT5 = new paintPoint(this.trackedPoint_LeftAnkle, this.trackedPoint_LeftKnee, 260, 450);
        this.lShoeTPT5.parDist = this.setParDistance(this.lShoeTPT5);
        this.lShoeTPT5.parAngle = this.setParAngle(this.lShoeTPT5);
        this.lShoeTPT6 = new paintPoint(this.trackedPoint_LeftAnkle, this.trackedPoint_LeftKnee, 275, 440);
        this.lShoeTPT6.parDist = this.setParDistance(this.lShoeTPT6);
        this.lShoeTPT6.parAngle = this.setParAngle(this.lShoeTPT6);
        this.lShoeTPT7 = new paintPoint(this.trackedPoint_LeftAnkle, this.trackedPoint_LeftKnee, 280, 430);
        this.lShoeTPT7.parDist = this.setParDistance(this.lShoeTPT7);
        this.lShoeTPT7.parAngle = this.setParAngle(this.lShoeTPT7);
    }
    this.setParDistance = function (pntPoint) {
        return Math.sqrt(Math.pow(pntPoint.parentTrackPoint.pointX - pntPoint.pointX, 2) + Math.pow(pntPoint.parentTrackPoint.pointY - pntPoint.pointY, 2));
    }
    this.setParAngle = function (pntPoint) {
        var tpDist = Math.sqrt(Math.pow(pntPoint.relatedTrackPoint.pointX - pntPoint.parentTrackPoint.pointX, 2) + Math.pow(pntPoint.relatedTrackPoint.pointY - pntPoint.parentTrackPoint.pointY, 2));
        var relDist = Math.sqrt(Math.pow(pntPoint.relatedTrackPoint.pointX - pntPoint.pointX, 2) + Math.pow(pntPoint.relatedTrackPoint.pointY - pntPoint.pointY, 2));
        return (Math.acos((Math.pow(tpDist, 2) + Math.pow(pntPoint.parDist, 2) - Math.pow(relDist, 2)) / (2 * (tpDist * pntPoint.parDist)))) * (180 / Math.PI);
    }

    this.calcPaintPointX = function (relTP, parTP, anglePt, dist) {

        var diffAngle = this.calc90DiffAngle(relTP, parTP);

        if (relTP.pointY < parTP.pointY) {
            if (relTP.pointX >= parTP.pointX)
            {
                //console.log("X: relY< -90-diff, " + Math.cos((anglePt - (90 - diffAngle)) * Math.PI / 180) * dist + parTP.pointX);
                return Math.cos((anglePt - (90 - diffAngle)) * Math.PI / 180) * dist + parTP.pointX;
            }                
            else
            {
                //console.log("X: relY< -180-diff,"+Math.cos((anglePt - (180 - diffAngle)) * Math.PI / 180) * dist + parTP.pointX);
                return Math.cos((anglePt - (180 - diffAngle)) * Math.PI / 180) * dist + parTP.pointX;
            }                
        }
        else {
            if (relTP.pointX >= parTP.pointX)
            {
                //console.log("X: relY> +90-diff,"+Math.cos((anglePt + (90 - diffAngle)) * Math.PI / 180) * dist + parTP.pointX);
                return Math.cos((anglePt + (90 - diffAngle)) * Math.PI / 180) * dist + parTP.pointX;
            }                
            else
            {
                //console.log("X: relY> +180-diff," + Math.cos((anglePt + (180 - diffAngle)) * Math.PI / 180) * dist + parTP.pointX);
                return Math.cos((anglePt + (180 - diffAngle)) * Math.PI / 180) * dist + parTP.pointX;
            }
                
        }
    }
    this.calcPaintPointY = function (relTP, parTP, anglePt, dist) {

        var diffAngle = this.calc90DiffAngle(relTP, parTP);

        if (relTP.pointY < parTP.pointY) {
            if (relTP.pointX >= parTP.pointX)
            {
                //console.log("Y: relY< -90-diff," + Math.sin((anglePt - (90 - diffAngle)) * Math.PI / 180) * dist + parTP.pointY);
                return Math.sin((anglePt - (90 - diffAngle)) * Math.PI / 180) * dist + parTP.pointY;
            }                
            else
            {
                //console.log("Y: relY< -180-diff," + Math.sin((anglePt - (180 - diffAngle)) * Math.PI / 180) * dist + parTP.pointY);
                return Math.sin((anglePt - (180 - diffAngle)) * Math.PI / 180) * dist + parTP.pointY;
            }
        }
        else {
            if (relTP.pointX >= parTP.pointX)
            {
                //console.log("Y: relY> +90-diff," + Math.sin((anglePt + (90 - diffAngle)) * Math.PI / 180) * dist + parTP.pointY);
                return Math.sin((anglePt + (90 - diffAngle)) * Math.PI / 180) * dist + parTP.pointY;
            }
            else
            {
                //console.log("Y: relY> +180-diff," + Math.sin((anglePt + (180 - diffAngle)) * Math.PI / 180) * dist + parTP.pointY);
                return Math.sin((anglePt + (180 - diffAngle)) * Math.PI / 180) * dist + parTP.pointY;
            }
        }
    }
    this.calc90DiffAngle = function (relTP, parTP) {

        var squarePoint = null;

        if (parTP.pointX == relTP.pointX)
            return 0;
        else {
            if (relTP.pointX > parTP.pointX)
                squarePoint = new trackPoint('SquarePoint', parTP.pointX, relTP.pointY);
            else
                squarePoint = new trackPoint('SquarePoint', relTP.pointX, parTP.pointY);

            var parTP_relTP_Dist = Math.sqrt(Math.pow(relTP.pointX - parTP.pointX, 2) + Math.pow(relTP.pointY - parTP.pointY, 2));
            var parTP_sqPnt_Dist = Math.sqrt(Math.pow(squarePoint.pointX - parTP.pointX, 2) + Math.pow(squarePoint.pointY - parTP.pointY, 2));
            var relTP_sqPnt_Dist = Math.sqrt(Math.pow(squarePoint.pointX - relTP.pointX, 2) + Math.pow(squarePoint.pointY - relTP.pointY, 2));

            return (Math.acos((Math.pow(parTP_relTP_Dist, 2) + Math.pow(parTP_sqPnt_Dist, 2) - Math.pow(relTP_sqPnt_Dist, 2)) / (2 * (parTP_relTP_Dist * parTP_sqPnt_Dist)))) * (180 / Math.PI);
        }
    }

    this.paintAvatar = function () {

        document.getElementById(this.divName).innerHTML =
            "<svg viewBox='0 0 700 700' preserveAspectRatio='xMinYMax meet'  height='500' width='500'>" +
                // Right Shoe
                "<path fill=" + this.shoesColour + " d='M" + this.rShoeTPT1.pointX + "," + this.rShoeTPT1.pointY + " L" + this.rShoeTPT2.pointX + "," + this.rShoeTPT2.pointY + " L" + this.rShoeTPT3.pointX + "," + this.rShoeTPT3.pointY +
                    " L" + this.rShoeTPT4.pointX + "," + this.rShoeTPT4.pointY + " C" + this.rShoeTPT4.pointX + "," + this.rShoeTPT4.pointY + " " + this.rShoeTPT5.pointX + "," + this.rShoeTPT5.pointY + " " + this.rShoeTPT6.pointX + "," + this.rShoeTPT6.pointY +
                    " C" + this.rShoeTPT6.pointX + "," + this.rShoeTPT6.pointY + " " + this.rShoeTPT7.pointX + "," + this.rShoeTPT7.pointY + " " + this.rShoeTPT1.pointX + "," + this.rShoeTPT1.pointY + " Z' />" +
                // Right Thigh
                "<path fill=" + this.legColour + " d='M" + this.rThighTR.pointX + "," + this.rThighTR.pointY + " L" + this.rThighBR.pointX + "," + this.rThighBR.pointY + " C" + this.rThighBR.pointX + "," + this.rThighBR.pointY + " " + this.rThighBCRV.pointX +
                    "," + this.rThighBCRV.pointY + " " + this.rThighBL.pointX + "," + this.rThighBL.pointY + " L" + this.rThighTL.pointX + "," + this.rThighTL.pointY + " C" + this.rThighTL.pointX + "," + this.rThighTL.pointY + " " + this.rThighTCRV.pointX +
                    "," + this.rThighTCRV.pointY + " " + this.rThighTR.pointX + "," + this.rThighTR.pointY + " Z' />" +
                // Right Calf
                "<path fill=" + this.legColour + " d='M" + this.rCalfTR.pointX + "," + this.rCalfTR.pointY + " L" + this.rCalfBR.pointX + "," + this.rCalfBR.pointY + " C" + this.rCalfBR.pointX + "," + this.rCalfBR.pointY + " " + this.rCalfBCRV.pointX +
                    "," + this.rCalfBCRV.pointY + " " + this.rCalfBL.pointX + "," + this.rCalfBL.pointY + " L" + this.rCalfTL.pointX + "," + this.rCalfTL.pointY + " C" + this.rCalfTL.pointX + "," + this.rCalfTL.pointY + " " + this.rCalfTCRV.pointX +
                    "," + this.rCalfTCRV.pointY + " " + this.rCalfTR.pointX + "," + this.rCalfTR.pointY + " Z' />" +
                // Left Shoe
                "<path fill=" + this.shoesColour + " d='M" + this.lShoeTPT1.pointX + "," + this.lShoeTPT1.pointY + " L" + this.lShoeTPT2.pointX + "," + this.lShoeTPT2.pointY + " L" + this.lShoeTPT3.pointX + "," + this.lShoeTPT3.pointY +
                    " L" + this.lShoeTPT4.pointX + "," + this.lShoeTPT4.pointY + " C" + this.lShoeTPT4.pointX + "," + this.lShoeTPT4.pointY + " " + this.lShoeTPT5.pointX + "," + this.lShoeTPT5.pointY + " " + this.lShoeTPT6.pointX + "," + this.lShoeTPT6.pointY +
                    " C" + this.lShoeTPT6.pointX + "," + this.lShoeTPT6.pointY + " " + this.lShoeTPT7.pointX + "," + this.lShoeTPT7.pointY + " " + this.lShoeTPT1.pointX + "," + this.lShoeTPT1.pointY + " Z' />" +
                // Left Thigh
                "<path fill=" + this.legColour + " d='M" + this.lThighTR.pointX + "," + this.lThighTR.pointY + " L" + this.lThighBR.pointX + "," + this.lThighBR.pointY + " C" + this.lThighBR.pointX + "," + this.lThighBR.pointY + " " + this.lThighBCRV.pointX +
                    "," + this.lThighBCRV.pointY + " " + this.lThighBL.pointX + "," + this.lThighBL.pointY + " L" + this.lThighTL.pointX + "," + this.lThighTL.pointY + " C" + this.lThighTL.pointX + "," + this.lThighTL.pointY + " " + this.lThighTCRV.pointX +
                    "," + this.lThighTCRV.pointY + " " + this.lThighTR.pointX + "," + this.lThighTR.pointY + " Z' />" +
                // Left Calf
                "<path fill=" + this.legColour + " d='M" + this.lCalfTR.pointX + "," + this.lCalfTR.pointY + " L" + this.lCalfBR.pointX + "," + this.lCalfBR.pointY + " C" + this.lCalfBR.pointX + "," + this.lCalfBR.pointY + " " + this.lCalfBCRV.pointX +
                    "," + this.lCalfBCRV.pointY + " " + this.lCalfBL.pointX + "," + this.lCalfBL.pointY + " L" + this.lCalfTL.pointX + "," + this.lCalfTL.pointY + " C" + this.lCalfTL.pointX + "," + this.lCalfTL.pointY + " " + this.lCalfTCRV.pointX +
                    "," + this.lCalfTCRV.pointY + " " + this.lCalfTR.pointX + "," + this.lCalfTR.pointY + " Z' />" +
                 // Body
                "<path fill=" + this.jumperColour + " d='M" + this.bodyTR.pointX + "," + this.bodyTR.pointY + " L" + this.bodyTL.pointX + "," + this.bodyTL.pointY + " L" + this.bodyBL.pointX + "," + this.bodyBL.pointY +
                    " L" + this.bodyBR.pointX + "," + this.bodyBR.pointY + " L" + this.bodyTR.pointX + "," + this.bodyTR.pointY + " Z' />" +
                "<path fill=" + this.legColour + " d='M" + this.bodyBR.pointX + "," + this.bodyBR.pointY + " L" + this.bodyBL.pointX + "," + this.bodyBL.pointY + " C" + this.bodyBL.pointX + "," + this.bodyBL.pointY +
                    " " + this.bodyCRV.pointX + "," + this.bodyCRV.pointY + " " + this.bodyBR.pointX + "," + this.bodyBR.pointY + " Z' />" +
                "<path fill=" + this.jumperAccent + " d='M" + this.jmprStrpTR.pointX + "," + this.jmprStrpTR.pointY + " L" + this.jmprStrpTL.pointX + "," + this.jmprStrpTL.pointY + " L" + this.jmprStrpBL.pointX + "," + this.jmprStrpBL.pointY +
                    " L" + this.jmprStrpBR.pointX + "," + this.jmprStrpBR.pointY + " L" + this.jmprStrpTR.pointX + "," + this.jmprStrpTR.pointY + " Z' />" +
                 // Head
                "<circle fill=" + this.skinColour + " cx='" + this.headCNTR.pointX + "' cy='" + this.headCNTR.pointY + "'r='50' />" +
                // Neck
                "<path fill=" + this.skinColour + " d='M" + this.neckTL.pointX + "," + this.neckTL.pointY + " L" + this.neckTR.pointX + "," + this.neckTR.pointY + " L" + this.neckBR.pointX + "," + this.neckBR.pointY +
                    " L" + this.neckBL.pointX + "," + this.neckBL.pointY + " L" + this.neckTL.pointX + "," + this.neckTL.pointY + " Z' />" +                
                // Right Bicep
                "<path fill=" + this.jumperColour + " d='M" + this.rBicepTR.pointX + "," + this.rBicepTR.pointY + " L" + this.rBicepBR.pointX + "," + this.rBicepBR.pointY + " C" + this.rBicepBR.pointX + "," + this.rBicepBR.pointY + " " + this.rBicepBCRV.pointX +
                    "," + this.rBicepBCRV.pointY + " " + this.rBicepBL.pointX + "," + this.rBicepBL.pointY + " L" + this.rBicepTL.pointX + "," + this.rBicepTL.pointY + " C" + this.rBicepTL.pointX + "," + this.rBicepTL.pointY + " " + this.rBicepTCRV.pointX +
                    "," + this.rBicepTCRV.pointY + " " + this.rBicepTR.pointX + "," + this.rBicepTR.pointY + " Z' />" +
                // Right Forearm
                "<path fill=" + this.jumperColour + " d='M" + this.rForearmTR.pointX + "," + this.rForearmTR.pointY + " L" + this.rForearmBR.pointX + "," + this.rForearmBR.pointY + " C" + this.rForearmBR.pointX + "," + this.rForearmBR.pointY + " " + this.rForearmBCRV.pointX +
                    "," + this.rForearmBCRV.pointY + " " + this.rForearmBL.pointX + "," + this.rForearmBL.pointY + " L" + this.rForearmTL.pointX + "," + this.rForearmTL.pointY + " C" + this.rForearmTL.pointX + "," + this.rForearmTL.pointY + " " + this.rForearmTCRV.pointX +
                    "," + this.rForearmTCRV.pointY + " " + this.rForearmTR.pointX + "," + this.rForearmTR.pointY + " Z' />" +
                // Right Hand
                "<path fill=" + this.skinColour + " d='M" + this.rHandTR.pointX + "," + this.rHandTR.pointY + " L" + this.rHandBR.pointX + "," + this.rHandBR.pointY + " C" + this.rHandBR.pointX + "," + this.rHandBR.pointY + " " + this.rHandBCRV.pointX +
                    "," + this.rHandBCRV.pointY + " " + this.rHandBL.pointX + "," + this.rHandBL.pointY + " L" + this.rHandTL.pointX + "," + this.rHandTL.pointY + " C" + this.rHandTL.pointX + "," + this.rHandTL.pointY + " " + this.rHandTCRV.pointX +
                    "," + this.rHandTCRV.pointY + " " + this.rHandTR.pointX + "," + this.rHandTR.pointY + " Z' />" +
                // Left Bicep
                "<path fill=" + this.jumperColour + " d='M" + this.lBicepTR.pointX + "," + this.lBicepTR.pointY + " L" + this.lBicepBR.pointX + "," + this.lBicepBR.pointY + " C" + this.lBicepBR.pointX + "," + this.lBicepBR.pointY + " " + this.lBicepBCRV.pointX +
                    "," + this.lBicepBCRV.pointY + " " + this.lBicepBL.pointX + "," + this.lBicepBL.pointY + " L" + this.lBicepTL.pointX + "," + this.lBicepTL.pointY + " C" + this.lBicepTL.pointX + "," + this.lBicepTL.pointY + " " + this.lBicepTCRV.pointX +
                    "," + this.lBicepTCRV.pointY + " " + this.lBicepTR.pointX + "," + this.lBicepTR.pointY + " Z' />" +
                // Left Forearm
                "<path fill=" + this.jumperColour + " d='M" + this.lForearmTR.pointX + "," + this.lForearmTR.pointY + " L" + this.lForearmBR.pointX + "," + this.lForearmBR.pointY + " C" + this.lForearmBR.pointX + "," + this.lForearmBR.pointY + " " + this.lForearmBCRV.pointX +
                    "," + this.lForearmBCRV.pointY + " " + this.lForearmBL.pointX + "," + this.lForearmBL.pointY + " L" + this.lForearmTL.pointX + "," + this.lForearmTL.pointY + " C" + this.lForearmTL.pointX + "," + this.lForearmTL.pointY + " " + this.lForearmTCRV.pointX +
                    "," + this.lForearmTCRV.pointY + " " + this.lForearmTR.pointX + "," + this.lForearmTR.pointY + " Z' />" +
                // Left Hand
                "<path fill=" + this.skinColour + " d='M" + this.lHandTR.pointX + "," + this.lHandTR.pointY + " L" + this.lHandBR.pointX + "," + this.lHandBR.pointY + " C" + this.lHandBR.pointX + "," + this.lHandBR.pointY + " " + this.lHandBCRV.pointX +
                    "," + this.lHandBCRV.pointY + " " + this.lHandBL.pointX + "," + this.lHandBL.pointY + " L" + this.lHandTL.pointX + "," + this.lHandTL.pointY + " C" + this.lHandTL.pointX + "," + this.lHandTL.pointY + " " + this.lHandTCRV.pointX +
                    "," + this.lHandTCRV.pointY + " " + this.lHandTR.pointX + "," + this.lHandTR.pointY + " Z' />" +

                //"<circle id='startPoint' cx='" + this.trackedPoint_LeftShoulder.pointX + "' cy='" + this.trackedPoint_LeftShoulder.pointY + "' r='2' fill='green' />" +
                //"<circle id='startPoint' cx='" + this.trackedPoint_LeftElbow.pointX + "' cy='" + this.trackedPoint_LeftElbow.pointY + "' r='2' fill='green' />" +
                //"<circle id='startPoint' cx='" + this.trackedPoint_LeftWrist.pointX + "' cy='" + this.trackedPoint_LeftWrist.pointY + "' r='2' fill='green' />" +
                //"<circle id='startPoint' cx='" + this.trackedPoint_LeftHip.pointX + "' cy='" + this.trackedPoint_LeftHip.pointY + "' r='2' fill='blue' />" +
                //"<circle id='startPoint' cx='" + this.trackedPoint_LeftKnee.pointX + "' cy='" + this.trackedPoint_LeftKnee.pointY + "' r='2' fill='green' />" +
                //"<circle id='startPoint' cx='" + this.trackedPoint_LeftAnkle.pointX + "' cy='" + this.trackedPoint_LeftAnkle.pointY + "' r='2' fill='green' />" +

                //"<circle id='startPoint' cx='" + this.trackedPoint_RightShoulder.pointX + "' cy='" + this.trackedPoint_RightShoulder.pointY + "' r='2' fill='blue' />" +
                //"<circle id='startPoint' cx='" + this.trackedPoint_RightElbow.pointX + "' cy='" + this.trackedPoint_RightElbow.pointY + "' r='2' fill='blue' />" +
                //"<circle id='startPoint' cx='" + this.trackedPoint_RightWrist.pointX + "' cy='" + this.trackedPoint_RightWrist.pointY + "' r='2' fill='blue' />" +
                //"<circle id='startPoint' cx='" + this.trackedPoint_RightHip.pointX + "' cy='" + this.trackedPoint_RightHip.pointY + "' r='2' fill='blue' />" +
                //"<circle id='startPoint' cx='" + this.trackedPoint_RightKnee.pointX + "' cy='" + this.trackedPoint_RightKnee.pointY + "' r='2' fill='blue' />" +
                //"<circle id='startPoint' cx='" + this.trackedPoint_RightAnkle.pointX + "' cy='" + this.trackedPoint_RightAnkle.pointY + "' r='2' fill='blue' />" +

                //"<circle id='startPoint' cx='" + this.trackedPoint_Head.pointX + "' cy='" + this.trackedPoint_Head.pointY + "' r='2' fill='black' />" +
                //"<circle id='startPoint' cx='" + this.trackedPoint_Body.pointX + "' cy='" + this.trackedPoint_Body.pointY + "' r='2' fill='black' />" +
                
            "</svg>";
    }

    this.update = function (angularCharacter) {

        if(this.active == true)
        {
            this.trackedPoint_Body.pointX = angularCharacter['Body'].x;
            this.trackedPoint_Body.pointY = angularCharacter['Body'].y;
            this.trackedPoint_Head.pointX = angularCharacter['Head'].x;
            this.trackedPoint_Head.pointY = angularCharacter['Head'].y;
            this.trackedPoint_RightShoulder.pointX = angularCharacter['R Shoulder'].x - 20;
            this.trackedPoint_RightShoulder.pointY = angularCharacter['R Shoulder'].y + 20;
            this.trackedPoint_RightElbow.pointX = angularCharacter['R Elbow'].x;
            this.trackedPoint_RightElbow.pointY = angularCharacter['R Elbow'].y;
            this.trackedPoint_LeftShoulder.pointX = angularCharacter['L Shoulder'].x + 10;
            this.trackedPoint_LeftShoulder.pointY = angularCharacter['L Shoulder'].y + 40;
            this.trackedPoint_LeftElbow.pointX = angularCharacter['L Elbow'].x;
            this.trackedPoint_LeftElbow.pointY = angularCharacter['L Elbow'].y;
            this.trackedPoint_LeftWrist.pointX = angularCharacter['L Hand'].x;
            this.trackedPoint_LeftWrist.pointY = angularCharacter['L Hand'].y;
            this.trackedPoint_RightWrist.pointX = angularCharacter['R Hand'].x;
            this.trackedPoint_RightWrist.pointY = angularCharacter['R Hand'].y;
            this.trackedPoint_LeftHip.pointX = angularCharacter['L Hip'].x;
            this.trackedPoint_LeftHip.pointY = angularCharacter['L Hip'].y;

            if (angularCharacter['R Hip'].x == angularCharacter['R Elbow'].x)
            {
                this.trackedPoint_RightHip.pointX = this.trackedPoint_LeftHip.pointX + 60;
                this.trackedPoint_RightHip.pointY = this.trackedPoint_LeftHip.pointY;
            }
            else
            {
                this.trackedPoint_RightHip.pointX = angularCharacter['R Hip'].x;
                this.trackedPoint_RightHip.pointY = angularCharacter['R Hip'].y;
            }
                        
            this.trackedPoint_LeftKnee.pointX = angularCharacter['L Knee'].x;
            this.trackedPoint_LeftKnee.pointY = angularCharacter['L Knee'].y;
            this.trackedPoint_RightKnee.pointX = angularCharacter['R Knee'].x;
            this.trackedPoint_RightKnee.pointY = angularCharacter['R Knee'].y;
            this.trackedPoint_LeftAnkle.pointX = angularCharacter['L Foot'].x;
            this.trackedPoint_LeftAnkle.pointY = angularCharacter['L Foot'].y;
            this.trackedPoint_RightAnkle.pointX = angularCharacter['R Foot'].x;
            this.trackedPoint_RightAnkle.pointY = angularCharacter['R Foot'].y;

            this.adjustPaintPoints();
            this.paintAvatar();
        }
    }
    this.reset = function () {
        this.active = false;
        this.setInitialPoints();
        this.paintAvatar();
    }
    this.reStart = function () {
        this.active = true;
    }
    this.adjustPaintPoints = function () 
    {
        this.bodyTR.pointX = this.calcPaintPointX(this.bodyTR.relatedTrackPoint, this.bodyTR.parentTrackPoint, this.bodyTR.parAngle, this.bodyTR.parDist);
        this.bodyTR.pointY = this.calcPaintPointY(this.bodyTR.relatedTrackPoint, this.bodyTR.parentTrackPoint, this.bodyTR.parAngle, this.bodyTR.parDist);
        this.bodyTL.pointX = this.calcPaintPointX(this.bodyTL.relatedTrackPoint, this.bodyTL.parentTrackPoint, this.bodyTL.parAngle, this.bodyTL.parDist);
        this.bodyTL.pointY = this.calcPaintPointY(this.bodyTL.relatedTrackPoint, this.bodyTL.parentTrackPoint, this.bodyTL.parAngle, this.bodyTL.parDist);
        this.bodyBL.pointX = this.calcPaintPointX(this.bodyBL.relatedTrackPoint, this.bodyBL.parentTrackPoint, this.bodyBL.parAngle, this.bodyBL.parDist);
        this.bodyBL.pointY = this.calcPaintPointY(this.bodyBL.relatedTrackPoint, this.bodyBL.parentTrackPoint, this.bodyBL.parAngle, this.bodyBL.parDist);
        this.bodyBR.pointX = this.calcPaintPointX(this.bodyBR.relatedTrackPoint, this.bodyBR.parentTrackPoint, this.bodyBR.parAngle, this.bodyBR.parDist);
        this.bodyBR.pointY = this.calcPaintPointY(this.bodyBR.relatedTrackPoint, this.bodyBR.parentTrackPoint, this.bodyBR.parAngle, this.bodyBR.parDist);
        this.bodyCRV.pointX = this.calcPaintPointX(this.bodyCRV.relatedTrackPoint, this.bodyCRV.parentTrackPoint, this.bodyCRV.parAngle, this.bodyCRV.parDist);
        this.bodyCRV.pointY = this.calcPaintPointY(this.bodyCRV.relatedTrackPoint, this.bodyCRV.parentTrackPoint, this.bodyCRV.parAngle, this.bodyCRV.parDist);

        this.jmprStrpTR.pointX = this.calcPaintPointX(this.jmprStrpTR.relatedTrackPoint, this.jmprStrpTR.parentTrackPoint, this.jmprStrpTR.parAngle, this.jmprStrpTR.parDist);
        this.jmprStrpTR.pointY = this.calcPaintPointY(this.jmprStrpTR.relatedTrackPoint, this.jmprStrpTR.parentTrackPoint, this.jmprStrpTR.parAngle, this.jmprStrpTR.parDist);
        this.jmprStrpTL.pointX = this.calcPaintPointX(this.jmprStrpTL.relatedTrackPoint, this.jmprStrpTL.parentTrackPoint, this.jmprStrpTL.parAngle, this.jmprStrpTL.parDist);
        this.jmprStrpTL.pointY = this.calcPaintPointY(this.jmprStrpTL.relatedTrackPoint, this.jmprStrpTL.parentTrackPoint, this.jmprStrpTL.parAngle, this.jmprStrpTL.parDist);
        this.jmprStrpBL.pointX = this.calcPaintPointX(this.jmprStrpBL.relatedTrackPoint, this.jmprStrpBL.parentTrackPoint, this.jmprStrpBL.parAngle, this.jmprStrpBL.parDist);
        this.jmprStrpBL.pointY = this.calcPaintPointY(this.jmprStrpBL.relatedTrackPoint, this.jmprStrpBL.parentTrackPoint, this.jmprStrpBL.parAngle, this.jmprStrpBL.parDist);
        this.jmprStrpBR.pointX = this.calcPaintPointX(this.jmprStrpBR.relatedTrackPoint, this.jmprStrpBR.parentTrackPoint, this.jmprStrpBR.parAngle, this.jmprStrpBR.parDist);
        this.jmprStrpBR.pointY = this.calcPaintPointY(this.jmprStrpBR.relatedTrackPoint, this.jmprStrpBR.parentTrackPoint, this.jmprStrpBR.parAngle, this.jmprStrpBR.parDist);

        // Head & Neck
        this.neckTL.pointX = this.calcPaintPointX(this.neckTL.relatedTrackPoint, this.neckTL.parentTrackPoint, this.neckTL.parAngle, this.neckTL.parDist);
        this.neckTL.pointY = this.calcPaintPointY(this.neckTL.relatedTrackPoint, this.neckTL.parentTrackPoint, this.neckTL.parAngle, this.neckTL.parDist);
        this.neckTR.pointX = this.calcPaintPointX(this.neckTR.relatedTrackPoint, this.neckTR.parentTrackPoint, this.neckTR.parAngle, this.neckTR.parDist);
        this.neckTR.pointY = this.calcPaintPointY(this.neckTR.relatedTrackPoint, this.neckTR.parentTrackPoint, this.neckTR.parAngle, this.neckTR.parDist);
        this.neckBR.pointX = this.calcPaintPointX(this.neckBR.relatedTrackPoint, this.neckBR.parentTrackPoint, this.neckBR.parAngle, this.neckBR.parDist);
        this.neckBR.pointY = this.calcPaintPointY(this.neckBR.relatedTrackPoint, this.neckBR.parentTrackPoint, this.neckBR.parAngle, this.neckBR.parDist);
        this.neckBL.pointX = this.calcPaintPointX(this.neckBL.relatedTrackPoint, this.neckBL.parentTrackPoint, this.neckBL.parAngle, this.neckBL.parDist);
        this.neckBL.pointY = this.calcPaintPointY(this.neckBL.relatedTrackPoint, this.neckBL.parentTrackPoint, this.neckBL.parAngle, this.neckBL.parDist);
        this.headCNTR.pointX = this.calcPaintPointX(this.headCNTR.relatedTrackPoint, this.headCNTR.parentTrackPoint, this.headCNTR.parAngle, this.headCNTR.parDist);
        this.headCNTR.pointY = this.calcPaintPointY(this.headCNTR.relatedTrackPoint, this.headCNTR.parentTrackPoint, this.headCNTR.parAngle, this.headCNTR.parDist);

        // Right Bicep
        this.rBicepTR.pointX = this.calcPaintPointX(this.rBicepTR.relatedTrackPoint, this.rBicepTR.parentTrackPoint, this.rBicepTR.parAngle, this.rBicepTR.parDist);
        this.rBicepTR.pointY = this.calcPaintPointY(this.rBicepTR.relatedTrackPoint, this.rBicepTR.parentTrackPoint, this.rBicepTR.parAngle, this.rBicepTR.parDist);
        this.rBicepBR.pointX = this.calcPaintPointX(this.rBicepBR.relatedTrackPoint, this.rBicepBR.parentTrackPoint, this.rBicepBR.parAngle, this.rBicepBR.parDist);
        this.rBicepBR.pointY = this.calcPaintPointY(this.rBicepBR.relatedTrackPoint, this.rBicepBR.parentTrackPoint, this.rBicepBR.parAngle, this.rBicepBR.parDist);
        this.rBicepBL.pointX = this.calcPaintPointX(this.rBicepBL.relatedTrackPoint, this.rBicepBL.parentTrackPoint, this.rBicepBL.parAngle, this.rBicepBL.parDist);
        this.rBicepBL.pointY = this.calcPaintPointY(this.rBicepBL.relatedTrackPoint, this.rBicepBL.parentTrackPoint, this.rBicepBL.parAngle, this.rBicepBL.parDist);
        this.rBicepTL.pointX = this.calcPaintPointX(this.rBicepTL.relatedTrackPoint, this.rBicepTL.parentTrackPoint, this.rBicepTL.parAngle, this.rBicepTL.parDist);
        this.rBicepTL.pointY = this.calcPaintPointY(this.rBicepTL.relatedTrackPoint, this.rBicepTL.parentTrackPoint, this.rBicepTL.parAngle, this.rBicepTL.parDist);
        this.rBicepTCRV.pointX = this.calcPaintPointX(this.rBicepTCRV.relatedTrackPoint, this.rBicepTCRV.parentTrackPoint, this.rBicepTCRV.parAngle, this.rBicepTCRV.parDist);
        this.rBicepTCRV.pointY = this.calcPaintPointY(this.rBicepTCRV.relatedTrackPoint, this.rBicepTCRV.parentTrackPoint, this.rBicepTCRV.parAngle, this.rBicepTCRV.parDist);
        this.rBicepBCRV.pointX = this.calcPaintPointX(this.rBicepBCRV.relatedTrackPoint, this.rBicepBCRV.parentTrackPoint, this.rBicepBCRV.parAngle, this.rBicepBCRV.parDist);
        this.rBicepBCRV.pointY = this.calcPaintPointY(this.rBicepBCRV.relatedTrackPoint, this.rBicepBCRV.parentTrackPoint, this.rBicepBCRV.parAngle, this.rBicepBCRV.parDist);
        
        // Right Forearm
        this.rForearmTR.pointX = this.calcPaintPointX(this.rForearmTR.relatedTrackPoint, this.rForearmTR.parentTrackPoint, this.rForearmTR.parAngle, this.rForearmTR.parDist);
        this.rForearmTR.pointY = this.calcPaintPointY(this.rForearmTR.relatedTrackPoint, this.rForearmTR.parentTrackPoint, this.rForearmTR.parAngle, this.rForearmTR.parDist);
        this.rForearmBR.pointX = this.calcPaintPointX(this.rForearmBR.relatedTrackPoint, this.rForearmBR.parentTrackPoint, this.rForearmBR.parAngle, this.rForearmBR.parDist);
        this.rForearmBR.pointY = this.calcPaintPointY(this.rForearmBR.relatedTrackPoint, this.rForearmBR.parentTrackPoint, this.rForearmBR.parAngle, this.rForearmBR.parDist);
        this.rForearmBL.pointX = this.calcPaintPointX(this.rForearmBL.relatedTrackPoint, this.rForearmBL.parentTrackPoint, this.rForearmBL.parAngle, this.rForearmBL.parDist);
        this.rForearmBL.pointY = this.calcPaintPointY(this.rForearmBL.relatedTrackPoint, this.rForearmBL.parentTrackPoint, this.rForearmBL.parAngle, this.rForearmBL.parDist);
        this.rForearmTL.pointX = this.calcPaintPointX(this.rForearmTL.relatedTrackPoint, this.rForearmTL.parentTrackPoint, this.rForearmTL.parAngle, this.rForearmTL.parDist);
        this.rForearmTL.pointY = this.calcPaintPointY(this.rForearmTL.relatedTrackPoint, this.rForearmTL.parentTrackPoint, this.rForearmTL.parAngle, this.rForearmTL.parDist);
        this.rForearmTCRV.pointX = this.calcPaintPointX(this.rForearmTCRV.relatedTrackPoint, this.rForearmTCRV.parentTrackPoint, this.rForearmTCRV.parAngle, this.rForearmTCRV.parDist);
        this.rForearmTCRV.pointY = this.calcPaintPointY(this.rForearmTCRV.relatedTrackPoint, this.rForearmTCRV.parentTrackPoint, this.rForearmTCRV.parAngle, this.rForearmTCRV.parDist);
        this.rForearmBCRV.pointX = this.calcPaintPointX(this.rForearmBCRV.relatedTrackPoint, this.rForearmBCRV.parentTrackPoint, this.rForearmBCRV.parAngle, this.rForearmBCRV.parDist);
        this.rForearmBCRV.pointY = this.calcPaintPointY(this.rForearmBCRV.relatedTrackPoint, this.rForearmBCRV.parentTrackPoint, this.rForearmBCRV.parAngle, this.rForearmBCRV.parDist);
        
        // Right Hand
        this.rHandTR.pointX = this.calcPaintPointX(this.rHandTR.relatedTrackPoint, this.rHandTR.parentTrackPoint, this.rHandTR.parAngle, this.rHandTR.parDist);
        this.rHandTR.pointY = this.calcPaintPointY(this.rHandTR.relatedTrackPoint, this.rHandTR.parentTrackPoint, this.rHandTR.parAngle, this.rHandTR.parDist);
        this.rHandBR.pointX = this.calcPaintPointX(this.rHandBR.relatedTrackPoint, this.rHandBR.parentTrackPoint, this.rHandBR.parAngle, this.rHandBR.parDist);
        this.rHandBR.pointY = this.calcPaintPointY(this.rHandBR.relatedTrackPoint, this.rHandBR.parentTrackPoint, this.rHandBR.parAngle, this.rHandBR.parDist);
        this.rHandBL.pointX = this.calcPaintPointX(this.rHandBL.relatedTrackPoint, this.rHandBL.parentTrackPoint, this.rHandBL.parAngle, this.rHandBL.parDist);
        this.rHandBL.pointY = this.calcPaintPointY(this.rHandBL.relatedTrackPoint, this.rHandBL.parentTrackPoint, this.rHandBL.parAngle, this.rHandBL.parDist);
        this.rHandTL.pointX = this.calcPaintPointX(this.rHandTL.relatedTrackPoint, this.rHandTL.parentTrackPoint, this.rHandTL.parAngle, this.rHandTL.parDist);
        this.rHandTL.pointY = this.calcPaintPointY(this.rHandTL.relatedTrackPoint, this.rHandTL.parentTrackPoint, this.rHandTL.parAngle, this.rHandTL.parDist);
        this.rHandTCRV.pointX = this.calcPaintPointX(this.rHandTCRV.relatedTrackPoint, this.rHandTCRV.parentTrackPoint, this.rHandTCRV.parAngle, this.rHandTCRV.parDist);
        this.rHandTCRV.pointY = this.calcPaintPointY(this.rHandTCRV.relatedTrackPoint, this.rHandTCRV.parentTrackPoint, this.rHandTCRV.parAngle, this.rHandTCRV.parDist);
        this.rHandBCRV.pointX = this.calcPaintPointX(this.rHandBCRV.relatedTrackPoint, this.rHandBCRV.parentTrackPoint, this.rHandBCRV.parAngle, this.rHandBCRV.parDist);
        this.rHandBCRV.pointY = this.calcPaintPointY(this.rHandBCRV.relatedTrackPoint, this.rHandBCRV.parentTrackPoint, this.rHandBCRV.parAngle, this.rHandBCRV.parDist);      

        // Left Bicep
        this.lBicepTR.pointX = this.calcPaintPointX(this.lBicepTR.relatedTrackPoint, this.lBicepTR.parentTrackPoint, this.lBicepTR.parAngle, this.lBicepTR.parDist);
        this.lBicepTR.pointY = this.calcPaintPointY(this.lBicepTR.relatedTrackPoint, this.lBicepTR.parentTrackPoint, this.lBicepTR.parAngle, this.lBicepTR.parDist);
        this.lBicepBR.pointX = this.calcPaintPointX(this.lBicepBR.relatedTrackPoint, this.lBicepBR.parentTrackPoint, this.lBicepBR.parAngle, this.lBicepBR.parDist);
        this.lBicepBR.pointY = this.calcPaintPointY(this.lBicepBR.relatedTrackPoint, this.lBicepBR.parentTrackPoint, this.lBicepBR.parAngle, this.lBicepBR.parDist);
        this.lBicepBL.pointX = this.calcPaintPointX(this.lBicepBL.relatedTrackPoint, this.lBicepBL.parentTrackPoint, this.lBicepBL.parAngle, this.lBicepBL.parDist);
        this.lBicepBL.pointY = this.calcPaintPointY(this.lBicepBL.relatedTrackPoint, this.lBicepBL.parentTrackPoint, this.lBicepBL.parAngle, this.lBicepBL.parDist);
        this.lBicepTL.pointX = this.calcPaintPointX(this.lBicepTL.relatedTrackPoint, this.lBicepTL.parentTrackPoint, this.lBicepTL.parAngle, this.lBicepTL.parDist);
        this.lBicepTL.pointY = this.calcPaintPointY(this.lBicepTL.relatedTrackPoint, this.lBicepTL.parentTrackPoint, this.lBicepTL.parAngle, this.lBicepTL.parDist);
        this.lBicepTCRV.pointX = this.calcPaintPointX(this.lBicepTCRV.relatedTrackPoint, this.lBicepTCRV.parentTrackPoint, this.lBicepTCRV.parAngle, this.lBicepTCRV.parDist);
        this.lBicepTCRV.pointY = this.calcPaintPointY(this.lBicepTCRV.relatedTrackPoint, this.lBicepTCRV.parentTrackPoint, this.lBicepTCRV.parAngle, this.lBicepTCRV.parDist);
        this.lBicepBCRV.pointX = this.calcPaintPointX(this.lBicepBCRV.relatedTrackPoint, this.lBicepBCRV.parentTrackPoint, this.lBicepBCRV.parAngle, this.lBicepBCRV.parDist);
        this.lBicepBCRV.pointY = this.calcPaintPointY(this.lBicepBCRV.relatedTrackPoint, this.lBicepBCRV.parentTrackPoint, this.lBicepBCRV.parAngle, this.lBicepBCRV.parDist);
        // Left Forearm
        this.lForearmTR.pointX = this.calcPaintPointX(this.lForearmTR.relatedTrackPoint, this.lForearmTR.parentTrackPoint, this.lForearmTR.parAngle, this.lForearmTR.parDist);
        this.lForearmTR.pointY = this.calcPaintPointY(this.lForearmTR.relatedTrackPoint, this.lForearmTR.parentTrackPoint, this.lForearmTR.parAngle, this.lForearmTR.parDist);
        this.lForearmBR.pointX = this.calcPaintPointX(this.lForearmBR.relatedTrackPoint, this.lForearmBR.parentTrackPoint, this.lForearmBR.parAngle, this.lForearmBR.parDist);
        this.lForearmBR.pointY = this.calcPaintPointY(this.lForearmBR.relatedTrackPoint, this.lForearmBR.parentTrackPoint, this.lForearmBR.parAngle, this.lForearmBR.parDist);
        this.lForearmBL.pointX = this.calcPaintPointX(this.lForearmBL.relatedTrackPoint, this.lForearmBL.parentTrackPoint, this.lForearmBL.parAngle, this.lForearmBL.parDist);
        this.lForearmBL.pointY = this.calcPaintPointY(this.lForearmBL.relatedTrackPoint, this.lForearmBL.parentTrackPoint, this.lForearmBL.parAngle, this.lForearmBL.parDist);
        this.lForearmTL.pointX = this.calcPaintPointX(this.lForearmTL.relatedTrackPoint, this.lForearmTL.parentTrackPoint, this.lForearmTL.parAngle, this.lForearmTL.parDist);
        this.lForearmTL.pointY = this.calcPaintPointY(this.lForearmTL.relatedTrackPoint, this.lForearmTL.parentTrackPoint, this.lForearmTL.parAngle, this.lForearmTL.parDist);
        this.lForearmTCRV.pointX = this.calcPaintPointX(this.lForearmTCRV.relatedTrackPoint, this.lForearmTCRV.parentTrackPoint, this.lForearmTCRV.parAngle, this.lForearmTCRV.parDist);
        this.lForearmTCRV.pointY = this.calcPaintPointY(this.lForearmTCRV.relatedTrackPoint, this.lForearmTCRV.parentTrackPoint, this.lForearmTCRV.parAngle, this.lForearmTCRV.parDist);
        this.lForearmBCRV.pointX = this.calcPaintPointX(this.lForearmBCRV.relatedTrackPoint, this.lForearmBCRV.parentTrackPoint, this.lForearmBCRV.parAngle, this.lForearmBCRV.parDist);
        this.lForearmBCRV.pointY = this.calcPaintPointY(this.lForearmBCRV.relatedTrackPoint, this.lForearmBCRV.parentTrackPoint, this.lForearmBCRV.parAngle, this.lForearmBCRV.parDist);
        // Left Hand
        this.lHandTR.pointX = this.calcPaintPointX(this.lHandTR.relatedTrackPoint, this.lHandTR.parentTrackPoint, this.lHandTR.parAngle, this.lHandTR.parDist);
        this.lHandTR.pointY = this.calcPaintPointY(this.lHandTR.relatedTrackPoint, this.lHandTR.parentTrackPoint, this.lHandTR.parAngle, this.lHandTR.parDist);
        this.lHandBR.pointX = this.calcPaintPointX(this.lHandBR.relatedTrackPoint, this.lHandBR.parentTrackPoint, this.lHandBR.parAngle, this.lHandBR.parDist);
        this.lHandBR.pointY = this.calcPaintPointY(this.lHandBR.relatedTrackPoint, this.lHandBR.parentTrackPoint, this.lHandBR.parAngle, this.lHandBR.parDist);
        this.lHandBL.pointX = this.calcPaintPointX(this.lHandBL.relatedTrackPoint, this.lHandBL.parentTrackPoint, this.lHandBL.parAngle, this.lHandBL.parDist);
        this.lHandBL.pointY = this.calcPaintPointY(this.lHandBL.relatedTrackPoint, this.lHandBL.parentTrackPoint, this.lHandBL.parAngle, this.lHandBL.parDist);
        this.lHandTL.pointX = this.calcPaintPointX(this.lHandTL.relatedTrackPoint, this.lHandTL.parentTrackPoint, this.lHandTL.parAngle, this.lHandTL.parDist);
        this.lHandTL.pointY = this.calcPaintPointY(this.lHandTL.relatedTrackPoint, this.lHandTL.parentTrackPoint, this.lHandTL.parAngle, this.lHandTL.parDist);
        this.lHandTCRV.pointX = this.calcPaintPointX(this.lHandTCRV.relatedTrackPoint, this.lHandTCRV.parentTrackPoint, this.lHandTCRV.parAngle, this.lHandTCRV.parDist);
        this.lHandTCRV.pointY = this.calcPaintPointY(this.lHandTCRV.relatedTrackPoint, this.lHandTCRV.parentTrackPoint, this.lHandTCRV.parAngle, this.lHandTCRV.parDist);
        this.lHandBCRV.pointX = this.calcPaintPointX(this.lHandBCRV.relatedTrackPoint, this.lHandBCRV.parentTrackPoint, this.lHandBCRV.parAngle, this.lHandBCRV.parDist);
        this.lHandBCRV.pointY = this.calcPaintPointY(this.lHandBCRV.relatedTrackPoint, this.lHandBCRV.parentTrackPoint, this.lHandBCRV.parAngle, this.lHandBCRV.parDist);

        // Right Thigh
        this.rThighTR.pointX = this.calcPaintPointX(this.rThighTR.relatedTrackPoint, this.rThighTR.parentTrackPoint, this.rThighTR.parAngle, this.rThighTR.parDist);
        this.rThighTR.pointY = this.calcPaintPointY(this.rThighTR.relatedTrackPoint, this.rThighTR.parentTrackPoint, this.rThighTR.parAngle, this.rThighTR.parDist);
        this.rThighBR.pointX = this.calcPaintPointX(this.rThighBR.relatedTrackPoint, this.rThighBR.parentTrackPoint, this.rThighBR.parAngle, this.rThighBR.parDist);
        this.rThighBR.pointY = this.calcPaintPointY(this.rThighBR.relatedTrackPoint, this.rThighBR.parentTrackPoint, this.rThighBR.parAngle, this.rThighBR.parDist);
        this.rThighBL.pointX = this.calcPaintPointX(this.rThighBL.relatedTrackPoint, this.rThighBL.parentTrackPoint, this.rThighBL.parAngle, this.rThighBL.parDist);
        this.rThighBL.pointY = this.calcPaintPointY(this.rThighBL.relatedTrackPoint, this.rThighBL.parentTrackPoint, this.rThighBL.parAngle, this.rThighBL.parDist);
        this.rThighTL.pointX = this.calcPaintPointX(this.rThighTL.relatedTrackPoint, this.rThighTL.parentTrackPoint, this.rThighTL.parAngle, this.rThighTL.parDist);
        this.rThighTL.pointY = this.calcPaintPointY(this.rThighTL.relatedTrackPoint, this.rThighTL.parentTrackPoint, this.rThighTL.parAngle, this.rThighTL.parDist);
        this.rThighTCRV.pointX = this.calcPaintPointX(this.rThighTCRV.relatedTrackPoint, this.rThighTCRV.parentTrackPoint, this.rThighTCRV.parAngle, this.rThighTCRV.parDist);
        this.rThighTCRV.pointY = this.calcPaintPointY(this.rThighTCRV.relatedTrackPoint, this.rThighTCRV.parentTrackPoint, this.rThighTCRV.parAngle, this.rThighTCRV.parDist);
        this.rThighBCRV.pointX = this.calcPaintPointX(this.rThighBCRV.relatedTrackPoint, this.rThighBCRV.parentTrackPoint, this.rThighBCRV.parAngle, this.rThighBCRV.parDist);
        this.rThighBCRV.pointY = this.calcPaintPointY(this.rThighBCRV.relatedTrackPoint, this.rThighBCRV.parentTrackPoint, this.rThighBCRV.parAngle, this.rThighBCRV.parDist);
        // Right Calf
        this.rCalfTR.pointX = this.calcPaintPointX(this.rCalfTR.relatedTrackPoint, this.rCalfTR.parentTrackPoint, this.rCalfTR.parAngle, this.rCalfTR.parDist);
        this.rCalfTR.pointY = this.calcPaintPointY(this.rCalfTR.relatedTrackPoint, this.rCalfTR.parentTrackPoint, this.rCalfTR.parAngle, this.rCalfTR.parDist);
        this.rCalfBR.pointX = this.calcPaintPointX(this.rCalfBR.relatedTrackPoint, this.rCalfBR.parentTrackPoint, this.rCalfBR.parAngle, this.rCalfBR.parDist);
        this.rCalfBR.pointY = this.calcPaintPointY(this.rCalfBR.relatedTrackPoint, this.rCalfBR.parentTrackPoint, this.rCalfBR.parAngle, this.rCalfBR.parDist);
        this.rCalfBL.pointX = this.calcPaintPointX(this.rCalfBL.relatedTrackPoint, this.rCalfBL.parentTrackPoint, this.rCalfBL.parAngle, this.rCalfBL.parDist);
        this.rCalfBL.pointY = this.calcPaintPointY(this.rCalfBL.relatedTrackPoint, this.rCalfBL.parentTrackPoint, this.rCalfBL.parAngle, this.rCalfBL.parDist);
        this.rCalfTL.pointX = this.calcPaintPointX(this.rCalfTL.relatedTrackPoint, this.rCalfTL.parentTrackPoint, this.rCalfTL.parAngle, this.rCalfTL.parDist);
        this.rCalfTL.pointY = this.calcPaintPointY(this.rCalfTL.relatedTrackPoint, this.rCalfTL.parentTrackPoint, this.rCalfTL.parAngle, this.rCalfTL.parDist);
        this.rCalfTCRV.pointX = this.calcPaintPointX(this.rCalfTCRV.relatedTrackPoint, this.rCalfTCRV.parentTrackPoint, this.rCalfTCRV.parAngle, this.rCalfTCRV.parDist);
        this.rCalfTCRV.pointY = this.calcPaintPointY(this.rCalfTCRV.relatedTrackPoint, this.rCalfTCRV.parentTrackPoint, this.rCalfTCRV.parAngle, this.rCalfTCRV.parDist);
        this.rCalfBCRV.pointX = this.calcPaintPointX(this.rCalfBCRV.relatedTrackPoint, this.rCalfBCRV.parentTrackPoint, this.rCalfBCRV.parAngle, this.rCalfBCRV.parDist);
        this.rCalfBCRV.pointY = this.calcPaintPointY(this.rCalfBCRV.relatedTrackPoint, this.rCalfBCRV.parentTrackPoint, this.rCalfBCRV.parAngle, this.rCalfBCRV.parDist);
        // Right Shoe
        this.rShoeTPT1.pointX = this.calcPaintPointX(this.rShoeTPT1.relatedTrackPoint, this.rShoeTPT1.parentTrackPoint, this.rShoeTPT1.parAngle, this.rShoeTPT1.parDist);
        this.rShoeTPT1.pointY = this.calcPaintPointY(this.rShoeTPT1.relatedTrackPoint, this.rShoeTPT1.parentTrackPoint, this.rShoeTPT1.parAngle, this.rShoeTPT1.parDist);
        this.rShoeTPT2.pointX = this.calcPaintPointX(this.rShoeTPT2.relatedTrackPoint, this.rShoeTPT2.parentTrackPoint, this.rShoeTPT2.parAngle, this.rShoeTPT2.parDist);
        this.rShoeTPT2.pointY = this.calcPaintPointY(this.rShoeTPT2.relatedTrackPoint, this.rShoeTPT2.parentTrackPoint, this.rShoeTPT2.parAngle, this.rShoeTPT2.parDist);
        this.rShoeTPT3.pointX = this.calcPaintPointX(this.rShoeTPT3.relatedTrackPoint, this.rShoeTPT3.parentTrackPoint, this.rShoeTPT3.parAngle, this.rShoeTPT3.parDist);
        this.rShoeTPT3.pointY = this.calcPaintPointY(this.rShoeTPT3.relatedTrackPoint, this.rShoeTPT3.parentTrackPoint, this.rShoeTPT3.parAngle, this.rShoeTPT3.parDist);
        this.rShoeTPT4.pointX = this.calcPaintPointX(this.rShoeTPT4.relatedTrackPoint, this.rShoeTPT4.parentTrackPoint, this.rShoeTPT4.parAngle, this.rShoeTPT4.parDist);
        this.rShoeTPT4.pointY = this.calcPaintPointY(this.rShoeTPT4.relatedTrackPoint, this.rShoeTPT4.parentTrackPoint, this.rShoeTPT4.parAngle, this.rShoeTPT4.parDist);
        this.rShoeTPT5.pointX = this.calcPaintPointX(this.rShoeTPT5.relatedTrackPoint, this.rShoeTPT5.parentTrackPoint, this.rShoeTPT5.parAngle, this.rShoeTPT5.parDist);
        this.rShoeTPT5.pointY = this.calcPaintPointY(this.rShoeTPT5.relatedTrackPoint, this.rShoeTPT5.parentTrackPoint, this.rShoeTPT5.parAngle, this.rShoeTPT5.parDist);
        this.rShoeTPT6.pointX = this.calcPaintPointX(this.rShoeTPT6.relatedTrackPoint, this.rShoeTPT6.parentTrackPoint, this.rShoeTPT6.parAngle, this.rShoeTPT6.parDist);
        this.rShoeTPT6.pointY = this.calcPaintPointY(this.rShoeTPT6.relatedTrackPoint, this.rShoeTPT6.parentTrackPoint, this.rShoeTPT6.parAngle, this.rShoeTPT6.parDist);
        this.rShoeTPT7.pointX = this.calcPaintPointX(this.rShoeTPT7.relatedTrackPoint, this.rShoeTPT7.parentTrackPoint, this.rShoeTPT7.parAngle, this.rShoeTPT7.parDist);
        this.rShoeTPT7.pointY = this.calcPaintPointY(this.rShoeTPT7.relatedTrackPoint, this.rShoeTPT7.parentTrackPoint, this.rShoeTPT7.parAngle, this.rShoeTPT7.parDist);
        // Left Thigh
        this.lThighTR.pointX = this.calcPaintPointX(this.lThighTR.relatedTrackPoint, this.lThighTR.parentTrackPoint, this.lThighTR.parAngle, this.lThighTR.parDist);
        this.lThighTR.pointY = this.calcPaintPointY(this.lThighTR.relatedTrackPoint, this.lThighTR.parentTrackPoint, this.lThighTR.parAngle, this.lThighTR.parDist);
        this.lThighBR.pointX = this.calcPaintPointX(this.lThighBR.relatedTrackPoint, this.lThighBR.parentTrackPoint, this.lThighBR.parAngle, this.lThighBR.parDist);
        this.lThighBR.pointY = this.calcPaintPointY(this.lThighBR.relatedTrackPoint, this.lThighBR.parentTrackPoint, this.lThighBR.parAngle, this.lThighBR.parDist);
        this.lThighBL.pointX = this.calcPaintPointX(this.lThighBL.relatedTrackPoint, this.lThighBL.parentTrackPoint, this.lThighBL.parAngle, this.lThighBL.parDist);
        this.lThighBL.pointY = this.calcPaintPointY(this.lThighBL.relatedTrackPoint, this.lThighBL.parentTrackPoint, this.lThighBL.parAngle, this.lThighBL.parDist);
        this.lThighTL.pointX = this.calcPaintPointX(this.lThighTL.relatedTrackPoint, this.lThighTL.parentTrackPoint, this.lThighTL.parAngle, this.lThighTL.parDist);
        this.lThighTL.pointY = this.calcPaintPointY(this.lThighTL.relatedTrackPoint, this.lThighTL.parentTrackPoint, this.lThighTL.parAngle, this.lThighTL.parDist);
        this.lThighTCRV.pointX = this.calcPaintPointX(this.lThighTCRV.relatedTrackPoint, this.lThighTCRV.parentTrackPoint, this.lThighTCRV.parAngle, this.lThighTCRV.parDist);
        this.lThighTCRV.pointY = this.calcPaintPointY(this.lThighTCRV.relatedTrackPoint, this.lThighTCRV.parentTrackPoint, this.lThighTCRV.parAngle, this.lThighTCRV.parDist);
        this.lThighBCRV.pointX = this.calcPaintPointX(this.lThighBCRV.relatedTrackPoint, this.lThighBCRV.parentTrackPoint, this.lThighBCRV.parAngle, this.lThighBCRV.parDist);
        this.lThighBCRV.pointY = this.calcPaintPointY(this.lThighBCRV.relatedTrackPoint, this.lThighBCRV.parentTrackPoint, this.lThighBCRV.parAngle, this.lThighBCRV.parDist);
        // Left Calf
        this.lCalfTR.pointX = this.calcPaintPointX(this.lCalfTR.relatedTrackPoint, this.lCalfTR.parentTrackPoint, this.lCalfTR.parAngle, this.lCalfTR.parDist);
        this.lCalfTR.pointY = this.calcPaintPointY(this.lCalfTR.relatedTrackPoint, this.lCalfTR.parentTrackPoint, this.lCalfTR.parAngle, this.lCalfTR.parDist);
        this.lCalfBR.pointX = this.calcPaintPointX(this.lCalfBR.relatedTrackPoint, this.lCalfBR.parentTrackPoint, this.lCalfBR.parAngle, this.lCalfBR.parDist);
        this.lCalfBR.pointY = this.calcPaintPointY(this.lCalfBR.relatedTrackPoint, this.lCalfBR.parentTrackPoint, this.lCalfBR.parAngle, this.lCalfBR.parDist);
        this.lCalfBL.pointX = this.calcPaintPointX(this.lCalfBL.relatedTrackPoint, this.lCalfBL.parentTrackPoint, this.lCalfBL.parAngle, this.lCalfBL.parDist);
        this.lCalfBL.pointY = this.calcPaintPointY(this.lCalfBL.relatedTrackPoint, this.lCalfBL.parentTrackPoint, this.lCalfBL.parAngle, this.lCalfBL.parDist);
        this.lCalfTL.pointX = this.calcPaintPointX(this.lCalfTL.relatedTrackPoint, this.lCalfTL.parentTrackPoint, this.lCalfTL.parAngle, this.lCalfTL.parDist);
        this.lCalfTL.pointY = this.calcPaintPointY(this.lCalfTL.relatedTrackPoint, this.lCalfTL.parentTrackPoint, this.lCalfTL.parAngle, this.lCalfTL.parDist);
        this.lCalfTCRV.pointX = this.calcPaintPointX(this.lCalfTCRV.relatedTrackPoint, this.lCalfTCRV.parentTrackPoint, this.lCalfTCRV.parAngle, this.lCalfTCRV.parDist);
        this.lCalfTCRV.pointY = this.calcPaintPointY(this.lCalfTCRV.relatedTrackPoint, this.lCalfTCRV.parentTrackPoint, this.lCalfTCRV.parAngle, this.lCalfTCRV.parDist);
        this.lCalfBCRV.pointX = this.calcPaintPointX(this.lCalfBCRV.relatedTrackPoint, this.lCalfBCRV.parentTrackPoint, this.lCalfBCRV.parAngle, this.lCalfBCRV.parDist);
        this.lCalfBCRV.pointY = this.calcPaintPointY(this.lCalfBCRV.relatedTrackPoint, this.lCalfBCRV.parentTrackPoint, this.lCalfBCRV.parAngle, this.lCalfBCRV.parDist);
        // Left Shoe
        this.lShoeTPT1.pointX = this.calcPaintPointX(this.lShoeTPT1.relatedTrackPoint, this.lShoeTPT1.parentTrackPoint, this.lShoeTPT1.parAngle, this.lShoeTPT1.parDist);
        this.lShoeTPT1.pointY = this.calcPaintPointY(this.lShoeTPT1.relatedTrackPoint, this.lShoeTPT1.parentTrackPoint, this.lShoeTPT1.parAngle, this.lShoeTPT1.parDist);
        this.lShoeTPT2.pointX = this.calcPaintPointX(this.lShoeTPT2.relatedTrackPoint, this.lShoeTPT2.parentTrackPoint, this.lShoeTPT2.parAngle, this.lShoeTPT2.parDist);
        this.lShoeTPT2.pointY = this.calcPaintPointY(this.lShoeTPT2.relatedTrackPoint, this.lShoeTPT2.parentTrackPoint, this.lShoeTPT2.parAngle, this.lShoeTPT2.parDist);
        this.lShoeTPT3.pointX = this.calcPaintPointX(this.lShoeTPT3.relatedTrackPoint, this.lShoeTPT3.parentTrackPoint, this.lShoeTPT3.parAngle, this.lShoeTPT3.parDist);
        this.lShoeTPT3.pointY = this.calcPaintPointY(this.lShoeTPT3.relatedTrackPoint, this.lShoeTPT3.parentTrackPoint, this.lShoeTPT3.parAngle, this.lShoeTPT3.parDist);
        this.lShoeTPT4.pointX = this.calcPaintPointX(this.lShoeTPT4.relatedTrackPoint, this.lShoeTPT4.parentTrackPoint, this.lShoeTPT4.parAngle, this.lShoeTPT4.parDist);
        this.lShoeTPT4.pointY = this.calcPaintPointY(this.lShoeTPT4.relatedTrackPoint, this.lShoeTPT4.parentTrackPoint, this.lShoeTPT4.parAngle, this.lShoeTPT4.parDist);
        this.lShoeTPT5.pointX = this.calcPaintPointX(this.lShoeTPT5.relatedTrackPoint, this.lShoeTPT5.parentTrackPoint, this.lShoeTPT5.parAngle, this.lShoeTPT5.parDist);
        this.lShoeTPT5.pointY = this.calcPaintPointY(this.lShoeTPT5.relatedTrackPoint, this.lShoeTPT5.parentTrackPoint, this.lShoeTPT5.parAngle, this.lShoeTPT5.parDist);
        this.lShoeTPT6.pointX = this.calcPaintPointX(this.lShoeTPT6.relatedTrackPoint, this.lShoeTPT6.parentTrackPoint, this.lShoeTPT6.parAngle, this.lShoeTPT6.parDist);
        this.lShoeTPT6.pointY = this.calcPaintPointY(this.lShoeTPT6.relatedTrackPoint, this.lShoeTPT6.parentTrackPoint, this.lShoeTPT6.parAngle, this.lShoeTPT6.parDist);
        this.lShoeTPT7.pointX = this.calcPaintPointX(this.lShoeTPT7.relatedTrackPoint, this.lShoeTPT7.parentTrackPoint, this.lShoeTPT7.parAngle, this.lShoeTPT7.parDist);
        this.lShoeTPT7.pointY = this.calcPaintPointY(this.lShoeTPT7.relatedTrackPoint, this.lShoeTPT7.parentTrackPoint, this.lShoeTPT7.parAngle, this.lShoeTPT7.parDist);
       
    }    
}