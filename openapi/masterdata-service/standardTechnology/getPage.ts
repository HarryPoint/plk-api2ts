// 标准工艺分页查询对象
export interface I标准工艺分页查询对象 {
    // 当前页面
    pageNo: number;
    // 标准工艺状态列表
    statusList: string[];
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 未分类 -- Y 就是查未分类，为空或者N 不起作用
    unCategory: string;
    // 标准工艺名称 -- 模糊查询
    name: string;
    // 标准工艺分类id
    standardTechnologyCategoryIds: number[];
}
// JSONResult«分页信息«标准工艺分页响应对象»»
export interface IJSONResult分页信息标准工艺分页响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«标准工艺分页响应对象»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
