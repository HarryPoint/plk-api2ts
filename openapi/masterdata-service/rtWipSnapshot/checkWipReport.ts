// WIP统计报表搜索VO
export interface IWIP统计报表搜索VO {
    // 当前页面
    pageNo: number;
    // 工序id集
    processIds: number[];
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: I分页排序VO[];
    // 物料id集
    materialIds: number[];
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
