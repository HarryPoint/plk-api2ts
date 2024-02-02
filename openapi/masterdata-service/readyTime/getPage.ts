// 准备期查询VO
export interface I准备期查询VO {
    // 当前页面
    pageNo: number;
    // 编号
    code: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: I分页排序VO[];
    // 工序id
    processId: number;
    // 名称
    name: string;
    // 规则类型
    ruleType: string;
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«准备期返回VO»»
export interface IJSONResult分页信息准备期返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息准备期返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«准备期返回VO»
export interface I分页信息准备期返回VO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I准备期返回VO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 准备期返回VO
export interface I准备期返回VO {
    // id
    id: number;
    // 所属工序id
    processId: number;
    // 所属工序名称
    processName: string;
    // 所属工序编号
    processCode: string;
    // 名称
    name: string;
    // 编号
    code: string;
    // 规则类型
    ruleType: string;
    // 规则类型描述
    ruleTypeDesc: string;
    // 耗时
    takeTime: number;
    // 数据状态
    dataStatus: number;
    // 创建人
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
}
