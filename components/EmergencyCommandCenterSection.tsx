import React from 'react';

export const EmergencyCommandCenterSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full px-6 py-16 md:px-12 lg:px-16 relative">
            <div className="max-w-[1920px] w-full flex flex-col gap-12 relative z-10">

                {/* Header */}
                <div className="flex flex-col gap-4 border-b border-white/5 pb-8">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 pl-2 pr-4 py-1.5 self-start shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                        <span className="material-symbols-outlined text-primary text-[20px] icon-glow">lightbulb</span>
                        <p className="text-primary text-sm font-medium leading-normal">洞察：宏观全网监控到微观资产连剖的无缝切换。</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-end">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                                09 界面：线路钻取与车站运维
                            </h1>
                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mt-4">
                                从宏观全网监控到微观资产连剖的无缝切换。
                            </p>
                        </div>
                        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">基础风模型</span>
                        </div>
                    </div>
                </div>

                {/* Main Interface: Two Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full min-h-[600px]">

                    {/* Left Column: Line 10 View */}
                    <div className="relative rounded-2xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 overflow-hidden group flex flex-col p-1">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none z-10"></div>

                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 relative z-20">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-cyan-400 text-xl">hub</span>
                                <h3 className="text-xl font-bold text-white tracking-wide">线路 10 视图</h3>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 relative overflow-hidden rounded-xl bg-black/40 m-2">
                            <img src="/assets/line_topology_view.png" alt="Line Topology" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105" />

                            {/* Overlays */}
                            <div className="absolute top-6 left-6 z-20 flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-slate-400 font-mono">准点率</span>
                                    <span className="text-2xl font-black text-cyan-400 font-mono">94.2%</span>
                                </div>
                            </div>
                            <div className="absolute top-6 left-32 z-20 flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-slate-400 font-mono">平均发车间隔</span>
                                    <span className="text-2xl font-white text-white font-mono">120s</span>
                                </div>
                            </div>

                            <div className="absolute bottom-8 left-6 right-6 z-20">
                                <h4 className="text-cyan-400 font-bold mb-1">动态发车间隔图</h4>
                                <p className="text-xs text-slate-300 max-w-sm">实时展现列车运行间距与运行计划兑现情况。</p>
                            </div>

                            <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-1 z-20 items-end opacity-60">
                                <span className="h-px w-12 bg-white/30"></span>
                                <span className="text-[10px] font-mono text-white/50">230</span>
                                <span className="h-px w-8 bg-white/20"></span>
                                <span className="h-[100px] w-px bg-white/10 my-1"></span>
                                <span className="text-[10px] font-mono text-white/50">150</span>
                                <span className="h-px w-8 bg-white/20"></span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Center Station View */}
                    <div className="relative rounded-2xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 overflow-hidden group flex flex-col p-1">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none z-10"></div>

                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 relative z-20">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-emerald-400 text-xl">apartment</span>
                                <h3 className="text-xl font-bold text-white tracking-wide">中心车站视图</h3>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/10">华贸路站</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 relative overflow-hidden rounded-xl bg-black/40 m-2">
                            <img src="/assets/station_digital_twin.png" alt="Station Digital Twin" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105" />

                            {/* Floating Controls */}
                            <div className="absolute top-4 right-4 z-20 flex gap-2">
                                <div className="flex items-center gap-1 bg-black/60 backdrop-blur border border-cyan-500/30 px-2 py-1 rounded text-xs text-cyan-400">
                                    <span className="material-symbols-outlined text-[14px]">water_drop</span> 客流
                                </div>
                                <div className="flex items-center gap-1 bg-black/60 backdrop-blur border border-white/10 px-2 py-1 rounded text-xs text-slate-400">
                                    <span className="material-symbols-outlined text-[14px]">gate</span> 闸机
                                </div>
                                <div className="flex items-center gap-1 bg-black/60 backdrop-blur border border-white/10 px-2 py-1 rounded text-xs text-slate-400">
                                    <span className="material-symbols-outlined text-[14px]">videocam</span> CCTV
                                </div>
                                <div className="flex items-center gap-1 bg-black/60 backdrop-blur border border-white/10 px-2 py-1 rounded text-xs text-slate-400">
                                    <span className="material-symbols-outlined text-[14px]">escalator</span> 扶梯
                                </div>
                            </div>

                            <div className="absolute top-16 right-4 z-20 max-w-[180px] text-right">
                                <h4 className="text-cyan-400 text-sm font-bold mb-1">车站数字孪生</h4>
                                <p className="text-[10px] text-slate-300 leading-tight">基于 IoT 传感器构建的 3D 模型，用于精确客流引导。</p>
                            </div>

                            <div className="absolute bottom-6 left-6 z-20 flex items-end gap-12">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">瞬时客流</span>
                                    <span className="text-lg font-bold text-white">进站高</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">站台拥堵</span>
                                    <span className="text-lg font-bold text-white">北</span>
                                </div>
                            </div>

                            <div className="absolute bottom-6 right-6 z-20 bg-yellow-500/10 border border-yellow-500/40 rounded-lg px-3 py-2 flex items-center gap-3 backdrop-blur-md">
                                <span className="material-symbols-outlined text-yellow-500">warning</span>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-yellow-500/80 font-bold uppercase">调度</span>
                                    <span className="text-sm font-bold text-white">2 员活动中</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08] transition-all duration-300 p-6 rounded-xl flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-slate-400 mb-2">
                            <span className="material-symbols-outlined text-lg">badge</span>
                            <span className="text-xs uppercase tracking-wider font-semibold">角色</span>
                        </div>
                        <div className="text-white font-medium text-lg leading-snug">
                            OCC 调度员 / 应急指挥官
                        </div>
                    </div>

                    <div className="relative overflow-hidden p-6 rounded-xl flex flex-col gap-2 transition-all duration-300 bg-red-500/[0.05] backdrop-blur-md border border-red-500/30 group">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none"></div>
                        <div className="flex items-center gap-2 text-slate-400 mb-2 relative z-10">
                            <span className="material-symbols-outlined text-lg text-red-500">warning</span>
                            <span className="text-xs uppercase tracking-wider font-semibold text-red-500">任务 (关键)</span>
                        </div>
                        <div className="text-white font-medium text-lg leading-snug relative z-10">
                            处置 P1 级信号故障
                        </div>
                    </div>

                    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08] transition-all duration-300 p-6 rounded-xl flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-slate-400 mb-2">
                            <span className="material-symbols-outlined text-lg">psychology</span>
                            <span className="text-xs uppercase tracking-wider font-semibold">决策</span>
                        </div>
                        <div className="text-white font-medium text-lg leading-snug">
                            是否启动公交接驳并局部暂停线路运营？
                        </div>
                    </div>

                    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08] transition-all duration-300 p-6 rounded-xl flex flex-col gap-2 hover:border-primary/30">
                        <div className="flex items-center gap-2 text-slate-400 mb-2">
                            <span className="material-symbols-outlined text-lg text-primary">play_circle</span>
                            <span className="text-xs uppercase tracking-wider font-semibold text-primary">行动</span>
                        </div>
                        <div className="text-white font-medium text-lg leading-snug">
                            执行“场景 C”自动化调度预案。
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};