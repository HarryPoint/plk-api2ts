import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/不合格品处理方式相关/listByValidationTypeUsingGET
*/
export default function fetchMethod(params: { useValidationTypes: string }, extraOptions?: any) {
    return http<IJSONResultListResponseObjectForHandlingNonconformingItems>(
        {
            url: "/masterdata-service/qmsHandlingMethodOfNonconformingProduct/listByValidationType",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«不合格品处理方式响应对象»» */
export interface IJSONResultListResponseObjectForHandlingNonconformingItems {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: ITheNonconformingProductHandlingModeRespondsToTheObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 不合格品处理方式响应对象 */
export interface ITheNonconformingProductHandlingModeRespondsToTheObject {
    /** id */
    id: number;
    /** 编号 */
    code: string;
    /** 处理方式 */
    handingMethod: string;
    /** 适用检验类型 */
    useValidationTypes: string;
    /** 适用检验类型描述 */
    useValidationTypesDesc: string;
}
