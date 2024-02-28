import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:17400/doc.html#/default/质检任务相关/reportUsingPOST_1
*/
export default function fetchMethod(options: { data: IProductionTreatment }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/qualityTask/report",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理 */
export interface IProductionTreatment {
    /** 生产任务id，任务外的上报反馈可不传 */
    produceTaskId: string;
    /** 生产异常类型id */
    produceAbnormalCategoryId: string;
    /** 标签id集合 */
    tagIds?: string[];
    /** 图片key集合 */
    imageKeys?: string[];
    /** 描述 */
    description?: string;
    /** 返工工艺路径步骤id，返工逻辑必填 */
    backProduceTechnologyRoutingStepId?: string;
    /** 对应批次id，除了上报，均必填 */
    lotOrderId?: string;
    /** wip状态记录id，除了上报，均必填 */
    wipRpId?: string;
    /** 异常数量，报废/返工/暂扣时必填 */
    abnormalQuantity?: number;
    /** 返工生产后处理方式，返工逻辑必填 */
    backProduceType?: EProductionTreatment_backProduceType;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProductionTreatment_backProduceType {
    /** 返回原工序 */
    RETURN = "RETURN",
    /** 顺序生产 */
    ORDER = "ORDER"
}
