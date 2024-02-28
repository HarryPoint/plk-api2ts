import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:17400/doc.html#/default/生产处理返工相关/addUsingPOST
*/
export default function fetchMethod(options: { data: IProductionProcessesReworkAddingRequestObjects }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/produceHandleBack/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理返工添加请求对象 */
export interface IProductionProcessesReworkAddingRequestObjects {
    /** 生产任务id */
    produceTaskId: string;
    /** 返工类型id */
    produceAbnormalCategoryId: string;
    /** 对应批次id */
    lotOrderId?: string;
    /** 返工工艺路径步骤id */
    backProduceTechnologyRoutingStepId: string;
    /** 返工数量 */
    abnormalQuantity?: number;
    /** 返工生产后处理方式 */
    backProduceType: EProductionProcessesReworkAddingRequestObjects_backProduceType;
    /** 标签id集合 */
    tagIds?: string[];
    /** 图片key集合 */
    imageKeys?: string[];
    /** 描述 */
    description?: string;
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

export enum EProductionProcessesReworkAddingRequestObjects_backProduceType {
    /** 返回原工序 */
    RETURN = "RETURN",
    /** 顺序生产 */
    ORDER = "ORDER"
}
