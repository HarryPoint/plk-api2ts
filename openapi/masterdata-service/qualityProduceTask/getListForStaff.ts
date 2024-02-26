import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产质检管理/getListForStaffUsingPOST_1
*/
export default function fetchMethod(data: IPublicBacklogDataQuery, params: { enterpriseId?: number; userId?: number }, extraOptions?: any) {
    return http<IJSONResultListQualityProduceTaskVO>(
        {
            url: "/masterdata-service/qualityProduceTask/getListForStaff",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 公共待办数据查询 */
export interface IPublicBacklogDataQuery {
    /** 编码 */
    code?: string;
    /** 创建时间--开始时间 */
    createBeginTime?: string;
    /** 创建时间--结束时间 */
    createEndTime?: string;
    /** 工序id集合 */
    processIds?: number[];
    /** 生产任务状态集合 */
    produceTaskStatusList?: string[];
    /** 是否超时(生产任务) */
    isTimeout?: string;
    /** 质检任务状态集合 */
    qualityProduceTaskStatusList?: string[];
    /** 生产任务可操作类型 */
    optTypes?: string[];
}
/** JSONResult«List«QualityProduceTaskVO»» */
export interface IJSONResultListQualityProduceTaskVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IQualityProduceTaskVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** QualityProduceTaskVO */
export interface IQualityProduceTaskVO {
    /** id */
    id?: number;
    /** 所属企业id */
    enterpriseId?: number;
    /** 任务号 */
    taskNo?: string;
    /** 所属生产任务id */
    produceTaskId?: number;
    /** 所属生产任务号 */
    produceTaskNo?: string;
    /** 生产任务类型 */
    produceTaskType?: string;
    /** 对应生产处理id */
    produceHandleId?: number;
    /** 质检任务类型 */
    type?: string;
    /** 生产订单id */
    produceOrderId?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 销售订单id */
    salesOrderId?: number;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 所属销售订单详情id */
    salesOrderDetailId?: number;
    /** 批次订单id */
    lotOrderId?: number;
    /** 批次订单号 */
    lotOrderNo?: string;
    /** 对应物料id */
    materialId?: number;
    /** 对应工艺路径id */
    routingId?: number;
    /** 对应工艺路径步骤id */
    routingStepId?: number;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 对应工序id */
    processId?: number;
    /** 仓位物料库存关联id */
    warehouseMaterialRpId?: number;
    /** 仓位物料WIP关联数量状态 */
    quantityStatus?: string;
    /** 对应工厂日历id */
    factoryCalendarId?: number;
    /** 对应班组id */
    classGroupId?: number;
    /** 对应班次id */
    classShiftId?: number;
    /** 总质检数 */
    totalInspectionQuantity?: number;
    /** 待检数 */
    waitInspectionQuantity?: number;
    /** 已检数 */
    inspectionQuantity?: number;
    /** 合格数 */
    passQuantity?: number;
    /** 不合格数 */
    notPassQuantity?: number;
    /** 让步接收数 */
    concessionQuantity?: number;
    /** 实际质检开始时间 */
    actualBeginTime?: string;
    /** 实际质检结束时间 */
    actualEndTime?: string;
    /** 质检人 */
    inspectionUserId?: number;
    /** 质检时间 */
    inspectionTime?: string;
    /** 备注 */
    remark?: string;
    /** 状态 */
    status?: string;
    /** 取消人 */
    cancelUserId?: number;
    /** 取消时间 */
    cancelTime?: string;
    /** 取消原因 */
    cancelRemark?: string;
    /** 创建时间 */
    createTime?: string;
}
