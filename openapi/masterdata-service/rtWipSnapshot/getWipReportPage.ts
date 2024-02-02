// WIP统计报表搜索VO
export interface IWIP统计报表搜索VO {
    // 当前页面
    pageNo: number;
    // 工序id集
    processIds: number[];
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 物料id集
    materialIds: number[];
}
// JSONResult«分页信息«WIP统计报表返回VO»»
export interface IJSONResult分页信息WIP统计报表返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«WIP统计报表返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
