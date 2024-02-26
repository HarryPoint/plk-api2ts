import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/生产处理返工相关/addUsingPOST
*/
export default function fetchMethod(data: IProductionProcessesReworkAddingRequestObjects, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/produceHandleBack/add",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 生产处理返工添加请求对象 */
export interface IProductionProcessesReworkAddingRequestObjects {
    /** 生产任务id */
    produceTaskId: number;
    /** 返工类型id */
    produceAbnormalCategoryId: number;
    /** 对应批次id */
    lotOrderId: number;
    /** 返工工艺路径步骤id */
    backProduceTechnologyRoutingStepId: number;
    /** 返工数量 */
    abnormalQuantity: number;
    /** 返工生产后处理方式 */
    backProduceType: string;
    /** 标签id集合 */
    tagIds: number[];
    /** 图片key集合 */
    imageKeys: string[];
    /** 描述 */
    description: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
