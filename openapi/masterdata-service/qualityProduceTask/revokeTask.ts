import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产质检管理/revokeTaskUsingPOST
*/
export default function fetchMethod(options: { data: IProductionTreatmentparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/qualityProduceTask/revokeTask",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理 */
export interface IProductionTreatment {
    /** 生产任务id，任务外的上报反馈可不传 */
    produceTaskId: number;
    /** 生产异常类型id */
    produceAbnormalCategoryId: number;
    /** 标签id集合 */
    tagIds?: number[];
    /** 图片key集合 */
    imageKeys?: string[];
    /** 描述 */
    description?: string;
    /** 返工工艺路径步骤id，返工逻辑必填 */
    backProduceTechnologyRoutingStepId?: number;
    /** 对应批次id，除了上报，均必填 */
    lotOrderId?: number;
    /** wip状态记录id，除了上报，均必填 */
    wipRpId?: number;
    /** 异常数量，报废/返工/暂扣时必填 */
    abnormalQuantity?: number;
    /** 返工生产后处理方式，返工逻辑必填 */
    backProduceType?: ('RETURN' | 'ORDER');
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
    ts?: number;
}
