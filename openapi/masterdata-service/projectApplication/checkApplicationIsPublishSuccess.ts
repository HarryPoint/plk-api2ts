import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目应用相关/checkApplicationIsPublishSuccessUsingPOST
*/
export default function fetchMethod(options: { data: IVerifyWhetherTheApplicationSuccessfullyAdvertisesTheRequestObject }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/projectApplication/checkApplicationIsPublishSuccess",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 应用是否发布成功校验请求对象 */
export interface IVerifyWhetherTheApplicationSuccessfullyAdvertisesTheRequestObject {
    /** 项目id */
    projectId: string;
    /** 应用流程id */
    flowPathId?: string;
    /** 应用流程名称 */
    flowPathName?: string;
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring1_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultstring1_data {
    Y = "Y",
    N = "N"
}
