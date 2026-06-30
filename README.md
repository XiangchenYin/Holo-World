<div align="center">
<h1> Holo-World </h1>
<h3> Unified Camera, Object and Weather Control for Video World Model </h3>
<div align="center">
</div>

Authors: [Xiangchen Yin](https://xiangchenyin.github.io/), [Wenzhang Sun](https://sunwenzhang1996.github.io/), [Jiahui Yuan](), [Zijie Liu](), [Yinda Chen](https://ydchen0806.github.io/), [Wei Li](), [Dachun Kai](https://scholar.google.com/citations?user=Wh4qVRoAAAAJ&hl=zh-CN&oi=ao), [Chunfeng Wang](), [Xiaoyan Sun†]()

<p align="center">
<a href="https://arxiv.org/abs/2606.20083"><img src="https://img.shields.io/badge/arXiv-Paper-red"></a>
<a href="https://xiangchenyin.github.io/Holo-World/"><img src="https://img.shields.io/badge/Project-Page-yellow"></a>
<a href=""><img src="https://img.shields.io/badge/Model-Holo-World-ffcc00"></a>
<img src="https://visitor-badge.laobi.icu/badge?page_id=XiangchenYin.Holo-World" />
</a>
</p>


<div align="center">
  <video src="https://github.com/user-attachments/assets/dfe41b5c-fb5c-48c9-ba3d-e49defcb427d" controls muted loop width="85%"></video>
</div>
</div>


# Abstract

Video world models are moving toward preserving an observed world under controllable camera and object motion while allowing its environmental state to change. Yet these controls remain isolated, and weather generation typically relies on a source video or reconstructed scene that already specifies future structure. We study a first-frame-anchored source-to-state setting, where the model starts from a single image and follows explicit camera and object controls and an optional weather instruction, then generates a video that either preserves the source world or transfers it to a target weather state. To address these challenges, we first build **HoloStateData**, a state video dataset that turns diverse videos into unified control samples for camera, object, and weather supervision. Second, we introduce **Holo-World**, a unified controllable video world model that jointly controls the scene from a single image. Its Unified Scene Adapter factorizes world preservation and weather transfer into distinct parameter subspaces, using rendered background, geometry buffers, and object controls to maintain controlled scene structure while modeling weather-dependent appearance and particle effects. Additionally, Scene-Weather Decomposed CFG guides scene and weather residuals separately, strengthening target weather effects without over-amplifying the full condition. Quantitative and qualitative experiments demonstrate that Holo-World maintains precise camera and object controls with consistent scene structure while transferring scenes into diverse target weather states, outperforming video-to-video weather editing baselines on weather-state generation.


## BibTeX

If you find our work useful in your research, please consider citing our paper:
```bibtex
@article{yin2026holoworld,
      title={Holo-World: Unified Camera, Object and Weather Control for Video World Model}, 
      author={Xiangchen Yin and Wenzhang Sun and Jiahui Yuan and Zijie Liu and Yinda Chen and Wei Li and Dachun Kai and Chunfeng Wang and Xiaoyan Sun},
      year={2026},
      eprint={2606.20083},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2606.20083}, 
}
```

## Acknowledgement

Thanks for these excellent opensource works: [VerseCrafter](https://github.com/TencentARC/VerseCrafter), [VideoX-Fun](https://github.com/aigc-apps/VideoX-Fun), [VACE](https://github.com/ali-vilab/VACE), [Uni3C](https://github.com/alibaba-damo-academy/Uni3C), [MoGe](https://github.com/microsoft/moge), [SAM 2](https://github.com/facebookresearch/sam2), [SpatialVID](https://github.com/NJU-3DV/SpatialVID), and [WeatherWeaver](https://github.com/chih-hao-lin/WeatherWeaver-Data)
