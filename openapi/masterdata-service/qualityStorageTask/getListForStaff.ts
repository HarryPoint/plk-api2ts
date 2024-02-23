import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/质检管理/getListForStaffUsingPOST_2
export default function fetchMethod(data: IPublicBacklogDataQuery, params: { enterpriseId: number; userId: number }) {
    return http<IJSONResultListQualityStorageTaskVO>({
        url: "/masterdata-service/qualityStorageTask/getListForStaff",
        method: "post",
        data,
        params,
    });
}
// 公共待办数据查询
export interface IPublicBacklogDataQuery {
    // 编码
    code: string;
    // 创建时间--开始时间
    createBeginTime: string;
    // 创建时间--结束时间
    createEndTime: string;
    // 工序id集合
    processIds: number[];
    // 生产任务状态集合
    produceTaskStatusList: string[];
    // 是否超时(生产任务)
    isTimeout: string;
    // 质检任务状态集合
    qualityProduceTaskStatusList: string[];
    // 生产任务可操作类型
    optTypes: string[];
}
// JSONResult«List«QualityStorageTaskVO»»
export interface IJSONResultListQualityStorageTaskVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IQualityStorageTaskVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// QualityStorageTaskVO
export interface IQualityStorageTaskVO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 任务号
    taskNo: string;
    // 质检任务类型
    type: string;
    // 采购收货单id
    purchaseWorkOrderId: number;
    // 对应物料id
    materialId: number;
    // 采购收货单物料明细id
    purchaseWorkOrderDetailId: number;
    // 对应质检方案id
    qualityInspectionPlanId: number;
    // 对应质检分类id
    qualityInspectionCategoryId: number;
    // 质检仓位id
    qualityWarehouseId: number;
    // 检验位置id
    checkPositionId: number;
    // 质检处理人
    handleUserId: number;
    // 计划开始时间
    planBeginTime: string;
    // 总质检数
    totalInspectionQuantity: number;
    // 待检数
    waitInspectionQuantity: number;
    // 已检数
    inspectionQuantity: number;
    // 合格数
    passQuantity: number;
    // 不合格数
    notPassQuantity: number;
    // 让步接收数
    concessionQuantity: number;
    // 完成时间
    completeTime: string;
    // 备注
    remark: string;
    // 状态
    status: string;
    // 取消人
    cancelUserId: number;
    // 取消时间
    cancelTime: string;
    // 质检任务类型
    taskType: string;
}
