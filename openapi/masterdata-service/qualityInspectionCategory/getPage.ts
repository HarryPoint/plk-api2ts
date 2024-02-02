// 质检分类搜索VO
export interface I质检分类搜索VO {
    // 当前页面
    pageNo: number;
    // 编号
    code: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 名称
    name: string;
    // 状态(是否可用)
    dataStatus: number;
}
// JSONResult«分页信息«质检分类返回VO»»
export interface IJSONResult分页信息质检分类返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«质检分类返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
