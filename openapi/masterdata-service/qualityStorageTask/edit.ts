// 编辑质检任务 DTO
export interface I编辑质检任务DTO {
    // id，如果不传就是新增
    id: number;
    // 任务号
    taskNo: string;
    // 质检物料id
    materialId: number;
    // 采购收货单物料明细id
    purchaseWorkOrderDetailId: number;
    // 质检方案id
    qualityInspectionPlanId: number;
    // 质检分类id
    qualityInspectionCategoryId: number;
    // 是否应用编码规则
    isCodeRule: string;
    // 物料位置id
    qualityWarehouseId: number;
    // 检验位置id
    checkPositionId: number;
    // 处理人id
    handleUserId: number;
    // 计划开始时间
    planBeginTime: string;
    // 采购收货单id
    purchaseWorkOrderId: number;
    // 质检任务类型
    taskType: string;
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
