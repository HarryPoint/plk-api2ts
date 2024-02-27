import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目文件相关/getByIdUsingGET_12
*/
export default function fetchMethod(options: { params: { id?: string; projectId?: string } }, extraOptions?: any) {
    return http<IJSONResultProjectFileRespondsToTheDTO>(
        {
            url: "/masterdata-service/projectFile/getById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目文件响应DTO» */
export interface IJSONResultProjectFileRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectFilesRespondToDtos;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目文件响应DTO */
export interface IProjectFilesRespondToDtos {
    /** ID */
    id?: string;
    /** 文件名 */
    name?: string;
    /** 文件分类ID */
    fileCategoryId?: string;
    /** 文件大小 */
    fileSize?: string;
    /** 文件来源 */
    fileForm?: string;
    /** 文件Key */
    fileKeys?: Record<string, any>[];
    /** 编码 */
    code?: string;
    /** 项目文件夹ID */
    projectFolderId?: string;
    /** 文件关联次数 */
    numberOfAssociation?: number;
    /** 项目id */
    projectId?: string;
}
