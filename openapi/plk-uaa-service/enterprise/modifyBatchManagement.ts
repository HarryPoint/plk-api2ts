import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/企业客户相关/modifyBatchManagementUsingPOST
*/
export default function fetchMethod(options: { data: IExampleModifyTheEnterpriseBatchManagementInformationRequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/enterprise/modifyBatchManagement",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 修改企业批次管理信息请求对象 */
export interface IExampleModifyTheEnterpriseBatchManagementInformationRequestObject {
    /** 企业id */
    id?: number;
    /** 是否启用批次关联 */
    isEnableBatchManagement?: string;
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
