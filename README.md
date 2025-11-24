<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>P5.js Portfolio</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js"></script>
    <style>
         #header-wrapper,
        .page-header,
        header {
            display: none !important;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            color: white;
            margin-bottom: 40px;
            font-size: 2.5em;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin-bottom: 40px;
        }
        
        .sketch-container {
            background: white;
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            transition: transform 0.3s ease;
        }
        
        .sketch-container:hover {
            transform: translateY(-5px);
        }
        
        .sketch-title {
            font-size: 1.3em;
            color: #333;
            margin-bottom: 15px;
            text-align: center;
            font-weight: bold;
        }
        
        .canvas-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f5f5f5;
            border-radius: 10px;
            overflow: hidden;
        }
        
        @media (max-width: 1024px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>과제 5</h1>
        
        <div class="grid">
            <div class="sketch-container">
                <div class="sketch-title">Assignment 1: Camping Scene</div>
                <div class="canvas-wrapper" id="sketch1"></div>
            </div>
            
            <div class="sketch-container">
                <div class="sketch-title">Assignment 4: Animated Day & Night</div>
                <div class="canvas-wrapper" id="sketch4"></div>
            </div>
            
            <div class="sketch-container">
                <div class="sketch-title">Assignment 2: Portrait</div>
                <div class="canvas-wrapper" id="sketch2"></div>
            </div>
            
            <div class="sketch-container">
                <div class="sketch-title">Assignment 3: Interactive Portrait</div>
                <div class="canvas-wrapper" id="sketch3"></div>
            </div>
        </div>
    </div>

    <!-- P5.js 스케치 파일들 불러오기 -->
    <script src="assignment1.js" data-parent="sketch1"></script>
    <script src="assignment2.js" data-parent="sketch2"></script>
    <script src="assignment3.js" data-parent="sketch3"></script>
    <script src="assignment4.js" data-parent="sketch4"></script>
</body>
</html>
