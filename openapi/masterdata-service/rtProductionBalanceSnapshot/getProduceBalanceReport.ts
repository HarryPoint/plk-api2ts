// 生产结存统计报表搜索VO
export interface I生产结存统计报表搜索VO {
    // 工序id集
    processIds: number[];
    // 物料id
    materialId: number;
    // 开始日期 yyyy-MM-dd HH:mm:ss
    beginDate: string;
    // 结束日期 yyyy-MM-dd HH:mm:ss
    endDate: string;
}
// JSONResult«生产结存物料统计报表返回VO»
export interface IJSONResult生产结存物料统计报表返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产结存物料统计报表返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
