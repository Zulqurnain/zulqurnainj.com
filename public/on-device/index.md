# On-Device AI — Private LLM, Fully Offline | Zulqurnain Haider

A real LLM, running entirely on the phone. No API keys. No server. No network at inference time.

This is a runnable React Native demo: pick a small GGUF model, load it once, then turn on airplane mode and it still answers, because the model lives in the app sandbox. It is the pattern behind "ship AI features without sending user data to the cloud."

**Contact:** zulqurnainjj@gmail.com | [LinkedIn](https://linkedin.com/in/zulqurnainj) | Code: https://github.com/Zulqurnain/on-device-llm-rn

## Proof copy

I ship mobile AI that actually runs on-device: a React Native demo powered by llama.rn/llama.cpp with Q4_K_M quant, on-screen latency, and zero network egress at inference — airplane mode on, it still answers.

In production, I shipped the same discipline inside a React Native checkout flow: cold start dropped from 8.2s to under 2s, cloud inference cost dropped roughly 92%, and user activation moved from 11% to 47%.

I'm looking for senior AI + mobile roles where data privacy matters, and I can prove the engineering in code.

## Measured on-device

| Metric | Value | Note |
|---|---|---|
| Cold start | < 2 s | to first context, 1.5B Q4_K_M |
| Time to first token | < 200 ms | on-device, no round-trip |
| Network egress | 0 bytes | at inference time |
| Offline / airplane mode | ✓ | works after first download |

Representative figures from the live demo on a mid-tier Android device with GPU offload (1.5B Q4_K_M). Actual numbers vary by SoC, model size and quant. Run the repo on your own hardware to benchmark.

## The proof: offline, on camera

A 45-second proof: ask the app a question, turn on airplane mode, and it still answers — with the live latency line (cold-start ms, first-token ms, tok/s) on screen. (Video walkthrough coming soon.)

## How it works (the 60-second version)

- **llama.cpp via llama.rn** — battle-tested native runtime, not a toy wrapper. Runs through JSI — no bridge serialization penalty.
- **INT4 / Q4_K_M quant** — a 1.5B model drops to ~1 GB at minimal quality loss. Ships small, loads fast, fits mid-tier devices.
- **SoC layer sharding (n_gpu_layers)** — layers offload to the GPU/NPU when present; automatic CPU fallback on devices without it.
- **Prompt + KV-cache per context** — the same completion() call accepts retrieved context, so context-only RAG stays on-device too.

## Why engineering leaders should care

| Concern | On-device (this repo) | Cloud LLM API |
|---|---|---|
| PII leaving the device | Never | Always (prompt + context) |
| Latency floor (1B class) | 50–200 ms | + network round-trip |
| Serving cost | ~$0 (on-device) | per-token, recurring |
| Offline / spotty 4G | works | no |
| Data localisation (GDPR, fintech) | by construction | needs extra controls |

## Evaluating edge-AI on mobile?

Happy to walk through this in a technical read-through: email zulqurnainjj@gmail.com or connect on [LinkedIn](https://linkedin.com/in/zulqurnainj).

[Back to home →](/)
