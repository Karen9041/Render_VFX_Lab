const weeks = [
    {
        "title": "渲染流程與 URP",
        "cards": [
            {
                "title": "CPU → GPU",
                "outline": [
                    "Draw submission",
                    "Vertex",
                    "Rasterization",
                    "Fragment",
                    "Framebuffer"
                ],
                "lab": "在 Frame Debugger 追蹤一個 Cube 的繪製事件並記錄順序",
                "question": "CPU 已完成提交是否代表 GPU 已完成繪製？如何驗證？",
                "refs": [
                    "manual",
                    "frame",
                    "gl"
                ]
            },
            {
                "title": "URP 與測試環境",
                "outline": [
                    "URP Asset",
                    "Renderer",
                    "Camera",
                    "Forward 路徑"
                ],
                "lab": "建立 Unity 6 URP 3D Lab，固定相機與光源",
                "question": "如何確認目前使用的 Render Pipeline？",
                "refs": [
                    "urp",
                    "manual"
                ]
            }
        ]
    },
    {
        "title": "Mesh、座標與 UV",
        "cards": [
            {
                "title": "Mesh 與座標空間",
                "outline": [
                    "Vertex",
                    "Triangle",
                    "Normal",
                    "Object/World/View Space"
                ],
                "lab": "旋轉物件與光源，記錄法線對光照的影響",
                "question": "為何移動物件不一定改變 Object Space 座標？",
                "refs": [
                    "manual",
                    "gl",
                    "cat"
                ]
            },
            {
                "title": "UV 與貼圖",
                "outline": [
                    "UV",
                    "Tiling",
                    "Offset",
                    "Wrap",
                    "Filter",
                    "Alpha"
                ],
                "lab": "用棋盤貼圖比較 UV 縮放、平移與 Repeat/Clamp",
                "question": "UV 超過 1 時畫面由哪些設定決定？",
                "refs": [
                    "manual",
                    "graph"
                ]
            }
        ]
    },
    {
        "title": "材質、混合與深度",
        "cards": [
            {
                "title": "Material 與 Shader",
                "outline": [
                    "材質參數",
                    "共享資產",
                    "Shader Pass"
                ],
                "lab": "同一 Mesh 配置兩種材質，逐一改變參數",
                "question": "Material 和 Shader 分別保存什麼資訊？",
                "refs": [
                    "manual",
                    "graph"
                ]
            },
            {
                "title": "透明與深度",
                "outline": [
                    "Alpha/Additive",
                    "ZTest",
                    "ZWrite",
                    "Sorting"
                ],
                "lab": "兩個透明 Quad 前後交疊，改變材質設定並截圖",
                "question": "為什麼透明物件即使通過 ZTest 仍可能排序錯誤？",
                "refs": [
                    "manual",
                    "gl",
                    "frame"
                ]
            }
        ]
    },
    {
        "title": "粒子系統入門",
        "cards": [
            {
                "title": "Shuriken 基礎",
                "outline": [
                    "Main",
                    "Emission",
                    "Shape",
                    "Burst",
                    "Lifetime"
                ],
                "lab": "製作單次受擊火花 Prefab",
                "question": "如何讓一次命中只發射一次粒子？",
                "refs": [
                    "particle",
                    "vfxcommunity"
                ]
            },
            {
                "title": "粒子動態與空間",
                "outline": [
                    "Velocity",
                    "Force",
                    "Noise",
                    "Size/Color",
                    "Local/World"
                ],
                "lab": "移動發射器比較兩種 Simulation Space",
                "question": "哪種空間適合煙霧殘留？以操作證據說明。",
                "refs": [
                    "particle",
                    "learn"
                ]
            }
        ]
    },
    {
        "title": "拖尾與序列幀",
        "cards": [
            {
                "title": "Trail 與 Renderer",
                "outline": [
                    "Trail Renderer",
                    "Particle Trails",
                    "Billboard/Mesh"
                ],
                "lab": "製作移動拖尾，測試回收重用",
                "question": "如何避免重用物件時出現跨場景長拖尾？",
                "refs": [
                    "particle",
                    "manual"
                ]
            },
            {
                "title": "Flipbook",
                "outline": [
                    "Texture Sheet Animation",
                    "幀數",
                    "生命週期",
                    "Alpha"
                ],
                "lab": "製作煙霧或爆炸序列幀效果",
                "question": "如何讓序列動畫在粒子消失前播放完畢？",
                "refs": [
                    "particle",
                    "vfxcommunity"
                ]
            }
        ]
    },
    {
        "title": "特效資產製作",
        "cards": [
            {
                "title": "Blender 特效 Mesh",
                "outline": [
                    "圓環",
                    "刀光",
                    "UV 展開",
                    "FBX 匯出"
                ],
                "lab": "製作一個弧形刀光 Mesh 並匯入 Unity",
                "question": "如何讓貼圖沿弧形流動而非任意拉伸？",
                "refs": [
                    "blender",
                    "graph"
                ]
            },
            {
                "title": "Texture Authoring",
                "outline": [
                    "Glow",
                    "Mask",
                    "Noise",
                    "Alpha",
                    "色彩空間"
                ],
                "lab": "製作三張可重用的灰階貼圖並比較取樣",
                "question": "Mask 作為資料時為何需注意 sRGB？",
                "refs": [
                    "blender",
                    "manual",
                    "vfxcommunity"
                ]
            }
        ]
    },
    {
        "title": "視覺節奏與 VFX Toolkit",
        "cards": [
            {
                "title": "特效節奏",
                "outline": [
                    "Anticipation",
                    "Impact",
                    "Dissipation",
                    "輪廓",
                    "對比"
                ],
                "lab": "拆解公開的技能效果影片，重做三段節奏",
                "question": "如何在不增加粒子數的情況下加強命中感？",
                "refs": [
                    "vfxcommunity",
                    "gabriel"
                ]
            },
            {
                "title": "Toolkit 驗收",
                "outline": [
                    "刀光",
                    "火花",
                    "拖尾",
                    "爆發",
                    "AOE 預警"
                ],
                "lab": "整理五個 Prefab，測試重播與清除",
                "question": "五種效果各自傳達什麼 gameplay 資訊？",
                "refs": [
                    "particle",
                    "learn"
                ]
            }
        ]
    },
    {
        "title": "Shader Graph 基礎",
        "cards": [
            {
                "title": "Graph 與數學節點",
                "outline": [
                    "Properties",
                    "Time",
                    "Lerp",
                    "Step",
                    "Smoothstep"
                ],
                "lab": "製作可由 Inspector 控制的發光材質",
                "question": "Step 與 Smoothstep 的視覺差異如何驗證？",
                "refs": [
                    "graph",
                    "book"
                ]
            },
            {
                "title": "UV Panning",
                "outline": [
                    "Tiling",
                    "Offset",
                    "Time",
                    "Noise"
                ],
                "lab": "製作兩層不同速度的能量流",
                "question": "速度參數如何影響貼圖座標而不是 Mesh 位置？",
                "refs": [
                    "graph",
                    "book"
                ]
            }
        ]
    },
    {
        "title": "動態 Shader 效果",
        "cards": [
            {
                "title": "Dissolve",
                "outline": [
                    "Noise",
                    "Threshold",
                    "Edge Mask",
                    "Emission"
                ],
                "lab": "製作可連續調整消散進度的材質",
                "question": "如何讓消散邊緣寬度獨立於進度？",
                "refs": [
                    "graph",
                    "gabriel"
                ]
            },
            {
                "title": "Fresnel 與 Distortion",
                "outline": [
                    "Normal",
                    "View Direction",
                    "Scene Color",
                    "Opaque Texture"
                ],
                "lab": "製作護盾與簡易扭曲效果",
                "question": "Fresnel 變化與視角有何關係？扭曲需要哪些場景資料？",
                "refs": [
                    "graph",
                    "urp"
                ]
            }
        ]
    },
    {
        "title": "頂點與粒子資料",
        "cards": [
            {
                "title": "Vertex Displacement",
                "outline": [
                    "頂點偏移",
                    "空間",
                    "Mesh 密度",
                    "Bounds"
                ],
                "lab": "製作波動平面並比較不同細分數",
                "question": "為何頂點太少時波形不平滑？",
                "refs": [
                    "graph",
                    "cat"
                ]
            },
            {
                "title": "Custom Vertex Streams",
                "outline": [
                    "粒子自訂資料",
                    "Vertex Attribute",
                    "Shader 讀取"
                ],
                "lab": "將每粒子的隨機值傳入材質控制顏色",
                "question": "如何證明不同粒子讀到不同的值？",
                "refs": [
                    "particle",
                    "graph"
                ]
            }
        ]
    },
    {
        "title": "HLSL 與 Runtime 控制",
        "cards": [
            {
                "title": "HLSL 最小 Shader",
                "outline": [
                    "ShaderLab",
                    "Vertex/Fragment",
                    "插值",
                    "Texture Sample"
                ],
                "lab": "以 URP 相容的 HLSL 重現 UV Panning",
                "question": "頂點與片段函式分別執行在哪個階段？",
                "refs": [
                    "hlsl",
                    "manual",
                    "cat"
                ]
            },
            {
                "title": "材質控制與 Variant",
                "outline": [
                    "SetFloat",
                    "sharedMaterial",
                    "material",
                    "MPB",
                    "Keyword",
                    "Stripping"
                ],
                "lab": "比較兩物件參數控制及 Player Build 的 Shader 表現",
                "question": "如何避免修改共享材質影響其他物件？如何確認 Variant 存在？",
                "refs": [
                    "manual",
                    "urp",
                    "frame"
                ]
            }
        ]
    },
    {
        "title": "光照與 PBR",
        "cards": [
            {
                "title": "光照模型",
                "outline": [
                    "Dot",
                    "Lambert",
                    "Blinn-Phong",
                    "Diffuse/Specular"
                ],
                "lab": "用球體比較光源方向與高光",
                "question": "法線與光源方向如何影響亮度？",
                "refs": [
                    "gl",
                    "cat"
                ]
            },
            {
                "title": "PBR 材質",
                "outline": [
                    "Metallic",
                    "Smoothness",
                    "BRDF",
                    "Energy Conservation"
                ],
                "lab": "建立材質球矩陣並固定環境光",
                "question": "如何區分金屬度與平滑度造成的變化？",
                "refs": [
                    "urp",
                    "gl"
                ]
            }
        ]
    },
    {
        "title": "NPR 與卡通光影",
        "cards": [
            {
                "title": "Toon Shading",
                "outline": [
                    "光照量化",
                    "Ramp",
                    "陰影階層"
                ],
                "lab": "同一模型比較連續光照與 Ramp",
                "question": "如何在光源移動時維持可控的陰影邊界？",
                "refs": [
                    "graph",
                    "cat"
                ]
            },
            {
                "title": "Outline",
                "outline": [
                    "Inverted Hull",
                    "Screen Space",
                    "厚度",
                    "遮擋"
                ],
                "lab": "實作基礎外擴輪廓，觀察遠近變化",
                "question": "兩種輪廓方案有哪些失敗情境？",
                "refs": [
                    "cat",
                    "urp"
                ]
            }
        ]
    },
    {
        "title": "角色材質",
        "cards": [
            {
                "title": "Normal Map 與 Tangent Space",
                "outline": [
                    "Tangent",
                    "Bitangent",
                    "Normal",
                    "法線貼圖匯入"
                ],
                "lab": "比較平面法線貼圖與真實幾何",
                "question": "為何模型旋轉後法線貼圖仍能維持局部方向？",
                "refs": [
                    "gl",
                    "manual"
                ]
            },
            {
                "title": "Face / Hair Shader",
                "outline": [
                    "臉部陰影控制",
                    "髮絲高光",
                    "方向遮罩"
                ],
                "lab": "用簡單頭部模型做受控光照比較",
                "question": "哪些特徵應由材質控制，哪些應由美術貼圖控制？",
                "refs": [
                    "graph",
                    "vfxcommunity"
                ]
            }
        ]
    },
    {
        "title": "陰影與畫面調性",
        "cards": [
            {
                "title": "Shadow Mapping",
                "outline": [
                    "Light Space",
                    "Depth",
                    "Bias",
                    "Resolution"
                ],
                "lab": "比較不同 shadow bias 與陰影解析度",
                "question": "如何分辨 Shadow Acne 與 Peter Panning？",
                "refs": [
                    "gl",
                    "urp"
                ]
            },
            {
                "title": "Post Processing",
                "outline": [
                    "HDR",
                    "Bloom",
                    "Tone Mapping",
                    "Color Grading"
                ],
                "lab": "固定場景比較三種曝光與 Bloom 設定",
                "question": "為什麼高亮材質不一定產生預期 Bloom？",
                "refs": [
                    "urp",
                    "manual"
                ]
            }
        ]
    },
    {
        "title": "環境與混合風格",
        "cards": [
            {
                "title": "Fog 與大氣",
                "outline": [
                    "距離霧",
                    "深度",
                    "散射概念",
                    "環境光"
                ],
                "lab": "建立前中後景，調整霧與光源",
                "question": "如何讓霧增加空間層次而不破壞可讀性？",
                "refs": [
                    "urp",
                    "gl"
                ]
            },
            {
                "title": "PBR/NPR Hybrid Lab",
                "outline": [
                    "角色與環境材質一致性",
                    "光照控制",
                    "參考拆解"
                ],
                "lab": "同一角色與相機比較三種風格並標記推測",
                "question": "如何區分公開遊戲的可見現象與實際引擎實作？",
                "refs": [
                    "graph",
                    "cat"
                ]
            }
        ]
    },
    {
        "title": "戰鬥動畫與時間",
        "cards": [
            {
                "title": "Animation Timing",
                "outline": [
                    "Startup",
                    "Active",
                    "Recovery",
                    "Animation Event"
                ],
                "lab": "建立一次攻擊演出及獨立命中判定",
                "question": "揮空、命中、取消時各應播放什麼？",
                "refs": [
                    "manual",
                    "learn"
                ]
            },
            {
                "title": "Hit Stop / Time Scale",
                "outline": [
                    "Scaled/Unscaled Time",
                    "局部停頓",
                    "恢復"
                ],
                "lab": "比較全域暫停與局部動畫停頓",
                "question": "如何避免 Hit Stop 結束後時間狀態未恢復？",
                "refs": [
                    "api",
                    "manual"
                ]
            }
        ]
    },
    {
        "title": "運鏡與聲畫同步",
        "cards": [
            {
                "title": "Cinemachine / Timeline",
                "outline": [
                    "Camera Impulse",
                    "Shot",
                    "Timeline",
                    "取消"
                ],
                "lab": "製作技能運鏡並能中途取消",
                "question": "如何避免運鏡結束後玩家失去控制？",
                "refs": [
                    "cinema",
                    "timeline"
                ]
            },
            {
                "title": "Screen Effect / Audio",
                "outline": [
                    "畫面閃光",
                    "音效事件",
                    "時序與可讀性"
                ],
                "lab": "對同一命中事件同步音效、閃光與鏡頭",
                "question": "如何測量視覺與聲音不同步而非只憑感覺？",
                "refs": [
                    "urp",
                    "manual"
                ]
            }
        ]
    },
    {
        "title": "Gameplay Presentation 整合",
        "cards": [
            {
                "title": "VFX Ownership",
                "outline": [
                    "事件",
                    "Pooling",
                    "Cancellation",
                    "Addressables Handle"
                ],
                "lab": "重現技能取消與資產延遲載入，確認不殘留",
                "question": "誰應持有 Prefab Handle？何時可以 Release？",
                "refs": [
                    "address",
                    "particle"
                ]
            },
            {
                "title": "3D Combat Demo",
                "outline": [
                    "三種技能",
                    "預警",
                    "命中",
                    "回收",
                    "可讀性"
                ],
                "lab": "錄製三個技能並附命中/揮空/取消測試",
                "question": "如何證明特效不會成為傷害判定的唯一權威？",
                "refs": [
                    "learn",
                    "vfxcommunity"
                ]
            }
        ]
    },
    {
        "title": "GPU 基礎與 Compute",
        "cards": [
            {
                "title": "GPU Execution Model",
                "outline": [
                    "平行執行",
                    "Vertex/Fragment",
                    "Bandwidth",
                    "Divergence"
                ],
                "lab": "比較同一場景不同像素覆蓋率的 GPU Capture",
                "question": "為何增加畫面覆蓋率可能比增加物件數更昂貴？",
                "refs": [
                    "gl",
                    "renderdoc"
                ]
            },
            {
                "title": "Compute Shader",
                "outline": [
                    "Kernel",
                    "Thread Group",
                    "Dispatch",
                    "Buffer"
                ],
                "lab": "實作簡單平行數值運算並讀回小量結果",
                "question": "Dispatch 如何覆蓋非整除的資料數量？",
                "refs": [
                    "manual",
                    "hlsl"
                ]
            }
        ]
    },
    {
        "title": "GPU 粒子與 Render Texture",
        "cards": [
            {
                "title": "VFX Graph",
                "outline": [
                    "Spawn",
                    "Initialize",
                    "Update",
                    "Output",
                    "GPU 模擬"
                ],
                "lab": "建立 GPU 粒子，與 Shuriken 做受控比較",
                "question": "哪些裝置能力與效果需求決定是否使用 VFX Graph？",
                "refs": [
                    "vfx",
                    "urp"
                ]
            },
            {
                "title": "Render Texture",
                "outline": [
                    "Offscreen Rendering",
                    "Depth",
                    "Texture Lifetime"
                ],
                "lab": "用第二台 Camera 渲染到 Texture 並顯示",
                "question": "Render Texture 的尺寸與格式如何影響記憶體？",
                "refs": [
                    "manual",
                    "api"
                ]
            }
        ]
    },
    {
        "title": "自訂渲染流程",
        "cards": [
            {
                "title": "Renderer Feature / Pass",
                "outline": [
                    "注入點",
                    "輸入輸出",
                    "Full Screen Pass"
                ],
                "lab": "實作一個全螢幕色彩效果",
                "question": "如何選擇 Pass 插入點並證明順序正確？",
                "refs": [
                    "urp",
                    "frame"
                ]
            },
            {
                "title": "Render Graph",
                "outline": [
                    "Resource Handle",
                    "Read/Write",
                    "Pass Dependency"
                ],
                "lab": "建立或閱讀 Unity 6 Render Graph 範例並追蹤依賴",
                "question": "未宣告讀寫依賴可能造成什麼問題？",
                "refs": [
                    "urp",
                    "cat"
                ]
            }
        ]
    },
    {
        "title": "大量場景與 GPU Debug",
        "cards": [
            {
                "title": "Batching / Instancing / Culling",
                "outline": [
                    "SRP Batcher",
                    "GPU Instancing",
                    "LOD",
                    "Frustum"
                ],
                "lab": "固定場景比較不同物件數和批次策略",
                "question": "Draw Call 下降是否必然降低 GPU 耗時？",
                "refs": [
                    "urp",
                    "frame",
                    "gpu"
                ]
            },
            {
                "title": "RenderDoc / Mobile",
                "outline": [
                    "GPU Capture",
                    "Pipeline State",
                    "Overdraw",
                    "裝置差異"
                ],
                "lab": "在支援環境抓取一幀，定位一個透明 Pass；手機可用時實測",
                "question": "如何確認瓶頸是 CPU、GPU 還是同步等待？",
                "refs": [
                    "renderdoc",
                    "gpu",
                    "urp"
                ]
            }
        ]
    },
    {
        "title": "最終整合與方向審核",
        "cards": [
            {
                "title": "Rendering Performance Lab",
                "outline": [
                    "基準",
                    "控制變因",
                    "CPU/GPU/Memory",
                    "畫質取捨"
                ],
                "lab": "比較至少兩種效果配置，記錄裝置、解析度及多幀資料",
                "question": "如何證明改善來自指定變更而不是測量噪音？",
                "refs": [
                    "gpu",
                    "frame",
                    "renderdoc"
                ]
            },
            {
                "title": "Final Review",
                "outline": [
                    "作品展示",
                    "技術拆解",
                    "證據",
                    "VFX/TA/Graphics 分流"
                ],
                "lab": "整理 Demo、前後比較、未解問題及下一階段提案",
                "question": "哪個方向最值得繼續？用實際成果與興趣證據支持。",
                "refs": [
                    "vfxcommunity",
                    "cat",
                    "gl"
                ]
            }
        ]
    }
];

const sources = {
    "manual": [
        "Unity 6 Manual",
        "https://docs.unity3d.com/6000.0/Documentation/Manual/",
        "官方索引：依主題搜尋對應章節，版本需與專案一致"
    ],
    "urp": [
        "Unity 6 URP Manual",
        "https://docs.unity3d.com/6000.0/Documentation/Manual/universal-render-pipeline.html",
        "官方 URP 文件"
    ],
    "frame": [
        "Unity Frame Debugger",
        "https://docs.unity3d.com/6000.0/Documentation/Manual/FrameDebugger.html",
        "官方工具文件"
    ],
    "graph": [
        "Shader Graph 文件",
        "https://docs.unity3d.com/Packages/com.unity.shadergraph@17.0/manual/index.html",
        "Unity 6.0 套件基準，其他版本請切換"
    ],
    "particle": [
        "Particle System 文件",
        "https://docs.unity3d.com/6000.0/Documentation/Manual/ParticleSystems.html",
        "官方粒子系統入口"
    ],
    "vfx": [
        "Visual Effect Graph 文件",
        "https://docs.unity3d.com/Packages/com.unity.visualeffectgraph@17.0/manual/index.html",
        "Unity 6.0 套件基準"
    ],
    "gpu": [
        "GPU Usage Profiler",
        "https://docs.unity3d.com/6000.0/Documentation/Manual/ProfilerGPU.html",
        "官方 GPU 分析工具"
    ],
    "api": [
        "Unity Scripting API",
        "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/",
        "官方 API 索引"
    ],
    "learn": [
        "Unity Learn",
        "https://learn.unity.com/",
        "官方課程搜尋入口"
    ],
    "gl": [
        "LearnOpenGL",
        "https://learnopengl.com/",
        "圖形原理；OpenGL/GLSL，不可直接當 URP 程式碼"
    ],
    "cat": [
        "Catlike Coding",
        "https://catlikecoding.com/unity/tutorials/",
        "渲染與 Custom SRP；舊 Rendering 系列使用 Built-in"
    ],
    "book": [
        "The Book of Shaders",
        "https://thebookofshaders.com/",
        "GLSL 數學與視覺直覺"
    ],
    "blender": [
        "Blender Manual",
        "https://docs.blender.org/manual/en/latest/",
        "官方建模、UV、匯出與貼圖索引"
    ],
    "vfxcommunity": [
        "Real-Time VFX",
        "https://realtimevfx.com/",
        "社群案例；自行判斷版本與品質"
    ],
    "gabriel": [
        "Gabriel Aguiar Prod.",
        "https://www.youtube.com/@GabrielAguiarProd",
        "特效教學頻道入口"
    ],
    "hlsl": [
        "Microsoft HLSL reference",
        "https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl",
        "HLSL 語言參考"
    ],
    "cinema": [
        "Cinemachine 文件",
        "https://docs.unity3d.com/Packages/com.unity.cinemachine@3.1/manual/index.html",
        "版本依 Package Manager 確認"
    ],
    "timeline": [
        "Timeline 文件",
        "https://docs.unity3d.com/Packages/com.unity.timeline@1.8/manual/index.html",
        "官方套件文件"
    ],
    "address": [
        "Addressables 文件",
        "https://docs.unity3d.com/Packages/com.unity.addressables@2.8/manual/index.html",
        "資源生命週期與引用計數"
    ],
    "renderdoc": [
        "RenderDoc",
        "https://renderdoc.org/",
        "GPU frame capture 工具與文件"
    ]
};

const phases = [
    [
        1,
        3,
        "01",
        "Rendering Foundations"
    ],
    [
        4,
        7,
        "02",
        "VFX Production"
    ],
    [
        8,
        11,
        "03",
        "Shader Engineering"
    ],
    [
        12,
        16,
        "04",
        "Stylized Rendering"
    ],
    [
        17,
        19,
        "05",
        "Combat Presentation"
    ],
    [
        20,
        24,
        "06",
        "Graphics & Performance"
    ]
];
