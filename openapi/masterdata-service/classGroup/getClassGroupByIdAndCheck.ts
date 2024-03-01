import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/班组相关/getClassGroupByIdAndCheckUsingGET
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string; Id?: string } }, extraOptions?: any) {
    return http<IJSONResultVOGroup>(
        {
            url: "/masterdata-service/classGroup/getClassGroupByIdAndCheck",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«班组VO» */
export interface IJSONResultVOGroup {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITeamVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 班组VO */
export interface ITeamVO {
    /** 班组编号 */
    code?: string;
    /** 上级部门id */
    departmentId?: string;
    /** id */
    id?: string;
    /** 班组名称 */
    name?: string;
}
