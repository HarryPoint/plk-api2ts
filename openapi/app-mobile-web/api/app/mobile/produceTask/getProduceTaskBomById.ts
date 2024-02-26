import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/生产任务相关/getProduceTaskBomByIdUsingGET
*/
export default function fetchMethod(options: { params: { taskId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProductionTaskBOMMaterialInformationVO>(
        {
            url: "/app-mobile-web/api/app/mobile/produceTask/getProduceTaskBomById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产任务BOM物料信息VO»» */
export interface IJSONResultListProductionTaskBOMMaterialInformationVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionTaskBOMMaterialInformationVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产任务BOM物料信息VO */
export interface IProductionTaskBOMMaterialInformationVO {
    /** 生产工艺路径步骤bom明细关联id */
    id?: number;
    /** 对应物料id */
    materialId?: number;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 计算消耗 */
    totalConsumeCount?: number;
}
