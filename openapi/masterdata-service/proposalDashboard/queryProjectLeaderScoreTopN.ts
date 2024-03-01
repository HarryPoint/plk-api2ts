import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/合理化建议综合看板相关/queryProjectLeaderScoreTopNUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultEmployeeScoreIndicatorsResponseDTO>(
        {
            url: "/masterdata-service/proposalDashboard/queryProjectLeaderScoreTopN",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«EmployeeScoreIndicatorsResponseDTO» */
export interface IJSONResultEmployeeScoreIndicatorsResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IEmployeeScoreIndicatorsResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** EmployeeScoreIndicatorsResponseDTO */
export interface IEmployeeScoreIndicatorsResponseDTO {
    /** 指标列表 */
    indicatorsList?: IEmployeeScoreIndicatorsItemResponseDTO[];
}
/** EmployeeScoreIndicatorsItemResponseDTO */
export interface IEmployeeScoreIndicatorsItemResponseDTO {
    /** 用户头像的文件Key */
    avatar?: string;
    /** 员工ID */
    employeeId?: string;
    /** 员工姓名 */
    employeeName?: string;
    /** 用户成绩 */
    score?: number;
}
