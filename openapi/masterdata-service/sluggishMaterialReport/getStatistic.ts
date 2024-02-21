// JSONResult«呆滞物料报表查询合计响应对象»
export interface IJSONResultTotalResponseObjectForQueryingTheInactiveMaterialsReport {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITotalResponseObjectForQueryingTheInactiveMaterialReport;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 呆滞物料报表查询合计响应对象
export interface ITotalResponseObjectForQueryingTheInactiveMaterialReport {
    // 总数量
    totalQuantity: number;
}
