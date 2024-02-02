// 质检任务搜索VO
export interface I质检任务搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 检验日期查询开始时间
    completeStartTime: string;
    // 质检分类
    qualityInspectionCategoryId: number;
    // 采购收货单编号
    purchaseWorkOrderNo: string;
    // 任务类型
    taskType: string;
    // 任务编号
    qualityStorageTaskNo: string;
    // 检验日期查询结束时间
    completeEndTime: string;
    // 检验员id
    handleUserId: number;
    // 检验位置id
    checkPositionId: number;
    // 仓位id
    qualityWarehouseId: number;
    // 物料id集
    materialIds: number[];
}
// JSONResult«分页信息«质检任务返回VO»»
export interface IJSONResult分页信息质检任务返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«质检任务返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
