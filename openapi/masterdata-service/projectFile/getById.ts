import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/项目文件相关/getByIdUsingGET_12
*/
export default function fetchMethod(options: { params: { id?: string; projectId?: string } }, extraOptions?: any) {
    return http<IJSONResultProjectFileRespondsToTheDTO>(
        {
            url: "/masterdata-service/projectFile/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目文件响应DTO» */
export interface IJSONResultProjectFileRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectFilesRespondToDtos;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目文件响应DTO */
export interface IProjectFilesRespondToDtos {
    /** 编码 */
    code?: string;
    /** 文件分类ID */
    fileCategoryId?: string;
    /** 文件来源 */
    fileForm?: string;
    /** 文件Key */
    fileKeys?: Record<string, any>[];
    /** 文件大小 */
    fileSize?: string;
    /** ID */
    id?: string;
    /** 文件名 */
    name?: string;
    /** 文件关联次数 */
    numberOfAssociation?: number;
    /** 项目文件夹ID */
    projectFolderId?: string;
    /** 项目id */
    projectId?: string;
}
