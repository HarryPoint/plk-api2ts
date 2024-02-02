// 盼盼上报统计查询对象
export interface I盼盼上报统计查询对象 {
    // 查询开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 查询结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 物料id集合
    materialIds: number[];
    // 工序id集合
    processIds: number[];
}
// JSONResult«盼盼上报统计汇总响应对象»
export interface IJSONResult盼盼上报统计汇总响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I盼盼上报统计汇总响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 盼盼上报统计汇总响应对象
export interface I盼盼上报统计汇总响应对象 {
    // 计划数
    totalPlanQuantity: number;
    // 出料数
    totalProduceQuantity: number;
    // 返工数
    totalBackQuantity: number;
    // 报废个数
    totalScrapQuantity: number;
}
