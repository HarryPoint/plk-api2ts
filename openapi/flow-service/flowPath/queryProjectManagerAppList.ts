import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程相关/queryProjectManagerAppListUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultProjectManageAppQueryResponseDTO>(
        {
            url: "/flow-service/flowPath/queryProjectManagerAppList",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProjectManageAppQueryResponseDTO» */
export interface IJSONResultProjectManageAppQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectManageAppQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProjectManageAppQueryResponseDTO */
export interface IProjectManageAppQueryResponseDTO {
    /** 项目管理App id列表 */
    projectManageAppList?: IIdNameNumberVO[];
    /** 公共App id列表 */
    publicAppList?: IIdNameNumberVO[];
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
