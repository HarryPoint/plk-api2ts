// 委外加工搜索VO
export interface I委外加工搜索VO {
    // 委外单号
    entrustNo: string;
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 生产订单号
    produceOrderCode: string;
    // 排序字段集
    orders: I分页排序VO[];
    // 物料id
    materialId: number;
    // 发起时间开始 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 发起时间结束 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«委外加工返回VO»»
export interface IJSONResult分页信息委外加工返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息委外加工返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«委外加工返回VO»
export interface I分页信息委外加工返回VO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I委外加工返回VO[];
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
// 委外加工返回VO
export interface I委外加工返回VO {
    // id
    id: number;
    // 委外单号
    entrustNo: string;
    // 生产订单id
    produceOrderId: number;
    // 生产订单号
    produceOrderCode: string;
    // 生产任务id
    produceTaskId: number;
    // 生产任务编号
    produceTaskNo: string;
    // 批次订单id
    lotOrderId: number;
    // 批次订单号
    lotOrderNo: string;
    // 物料主数据id
    materialId: number;
    // 物料主数据名称
    materialName: string;
    // 物料主数据编号
    materialCode: string;
    // 对应物料规格
    materialSpec: string;
    // 对应物料单位
    materialUnit: string;
    // 供应商id
    supplierId: number;
    // 供应商名称
    supplierName: string;
    // 供应商编号
    supplierCode: string;
    // 发起工序id
    entrustProcessId: number;
    // 发起工序名称
    entrustProcessName: string;
    // 发起工序编号
    entrustProcessCode: string;
    // 委外发起人
    createUserId: number;
    // 委外发起人姓名
    createUsername: string;
    // 委外发起时间
    createTime: string;
    // 委外总量(委外发出)
    totalQuantity: number;
    // 实际返回数量(委外返回)
    actualBackQuantity: number;
    // 报废总量(委外报废)
    scrapQuantity: number;
    // 委外合格返回数量
    produceQuantity: number;
    // 剩余数量
    surplusQuantity: number;
    // 返回生产工艺路径步骤id
    backRoutingStepId: number;
    // 接收工序id
    backProcessId: number;
    // 接收工序名称
    backProcessName: string;
    // 接收工序编号
    backProcessCode: string;
    // 投料记录数
    backDetailsCount: number;
    // 首次投料时间
    firstBackTime: string;
}
