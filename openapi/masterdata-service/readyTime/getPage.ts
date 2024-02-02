// 准备期查询VO
export interface I准备期查询VO {
    // 当前页面
    pageNo: number;
    // 编号
    code: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 工序id
    processId: number;
    // 名称
    name: string;
    // 规则类型
    ruleType: string;
}
// JSONResult«分页信息«准备期返回VO»»
export interface IJSONResult分页信息准备期返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«准备期返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
