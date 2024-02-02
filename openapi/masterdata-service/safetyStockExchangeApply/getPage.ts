// 安全库存变更申请搜索VO
export interface I安全库存变更申请搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: I分页排序VO[];
    // 设置类型
    type: string;
    // 对应业务id
    businessId: number;
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«安全库存变更申请返回VO»»
export interface IJSONResult分页信息安全库存变更申请返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息安全库存变更申请返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«安全库存变更申请返回VO»
export interface I分页信息安全库存变更申请返回VO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I安全库存变更申请返回VO[];
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
// 安全库存变更申请返回VO
export interface I安全库存变更申请返回VO {
    // id
    id: number;
    // 申请单号
    applyNo: string;
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 安全库存下限
    lowerLimit: number;
    // 安全库存上限
    upperLimit: number;
    // 采购触发下限
    purchaseLowerLimit: number;
    // 通知人集
    sendUsers: IId名称编号VO[];
    // 通知类型
    sendType: string;
    // 通知类型描述
    sendTypeDesc: string;
    // 状态
    status: string;
    // 状态描述
    statusDesc: string;
    // 审核时间
    examineTime: string;
    // 创建人
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
}
// Id，名称，编号VO
export interface IId名称编号VO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
