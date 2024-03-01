import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产质检管理/revokeTaskUsingPOST
*/
export default function fetchMethod(options: { data: IProductionTreatment, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/qualityProduceTask/revokeTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理 */
export interface IProductionTreatment {
    /** 异常数量，报废/返工/暂扣时必填 */
    abnormalQuantity?: number;
    /** 返工工艺路径步骤id，返工逻辑必填 */
    backProduceTechnologyRoutingStepId?: string;
    /** 返工生产后处理方式，返工逻辑必填 */
    backProduceType?: EProductionTreatment_backProduceType;
    /** 描述 */
    description?: string;
    /** 图片key集合 */
    imageKeys?: string[];
    /** 对应批次id，除了上报，均必填 */
    lotOrderId?: string;
    /** 生产异常类型id */
    produceAbnormalCategoryId: string;
    /** 生产任务id，任务外的上报反馈可不传 */
    produceTaskId: string;
    /** 标签id集合 */
    tagIds?: string[];
    /** wip状态记录id，除了上报，均必填 */
    wipRpId?: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProductionTreatment_backProduceType {
    /** 返回原工序 */
    RETURN = "RETURN",
    /** 顺序生产 */
    ORDER = "ORDER"
}
