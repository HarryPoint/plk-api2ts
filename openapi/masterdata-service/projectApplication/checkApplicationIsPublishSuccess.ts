import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目应用相关/checkApplicationIsPublishSuccessUsingPOST
*/
export default function fetchMethod(options: { data: IVerifyWhetherTheApplicationSuccessfullyAdvertisesTheRequestObject }, extraOptions?: any) {
    return http<IJSONResultString1>(
        {
            url: "/masterdata-service/projectApplication/checkApplicationIsPublishSuccess",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 应用是否发布成功校验请求对象 */
export interface IVerifyWhetherTheApplicationSuccessfullyAdvertisesTheRequestObject {
    /** 应用流程id */
    flowPathId?: string;
    /** 应用流程名称 */
    flowPathName?: string;
    /** 项目id */
    projectId: string;
}
/** JSONResult«string»_1 */
export interface IJSONResultString1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: EJSONResultString1_data;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultString1_data {
    Y = "Y",
    N = "N"
}
