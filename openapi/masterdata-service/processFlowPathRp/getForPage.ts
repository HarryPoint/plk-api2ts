// 工序字段对应表列表查询VO
export interface I工序字段对应表列表查询VO {
    // 编号
    code: string;
    // 当前页面
    pageNo: number;
    // 工序名称
    processName: string;
    // 分页大小
    pageSize: number;
    // 关联字段名称
    fieldName: string;
    // 排序字段集
    orders: I分页排序VO[];
    // 数据状态 -- 0停用 1启用
    dataStatus: number;
    // 创建日期---开始时间
    startTime: string;
    // 创建日期---结束时间
    endTime: string;
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«工序字段对应表列表VO»»
export interface IJSONResult分页信息工序字段对应表列表VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息工序字段对应表列表VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«工序字段对应表列表VO»
export interface I分页信息工序字段对应表列表VO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I工序字段对应表列表VO[];
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
// 工序字段对应表列表VO
export interface I工序字段对应表列表VO {
    // id
    id: number;
    // 编号
    code: string;
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 关联表单id
    flowPathId: number;
    // 关联单据名称
    flowPathName: string;
    // 关联字段序列号列表
    fieldSerialNoList: string[];
    // 关联字段名称列表
    fieldNameList: string[];
    // 状态  -- 0停用 1启用
    dataStatus: number;
    // 创建人
    createUserName: string;
    // 创建时间
    createTime: string;
}
